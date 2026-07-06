import { readFileSync, writeFileSync } from 'fs';
const inputFile = process.argv[2] || '/workspace/js/engine/storyExtensions.js';
const outputFile = process.argv[3] || inputFile;

let content = readFileSync(inputFile, 'utf-8');

// Extract EASTER_EGG_CHOICES block
const startMarker = 'const EASTER_EGG_CHOICES = {';
const endMarker = '};\n\n/**\n * 彩蛋专属场景';
const start = content.indexOf(startMarker);
const end = content.indexOf(endMarker);
if (start === -1 || end === -1) {
    console.error('Markers not found');
    process.exit(1);
}

const choicesBlock = content.slice(start + startMarker.length, end);

// Parse each key block using regex - find 'story:scene': [ ... ]
const keyPattern = /'([a-z]+:[a-z_0-9]+)':\s*\[/g;
const matches = [...choicesBlock.matchAll(keyPattern)];

const grouped = new Map();
for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const key = m[1];
    const blockStart = m.index;
    const blockEnd = i + 1 < matches.length ? matches[i + 1].index : choicesBlock.length;
    const block = choicesBlock.slice(blockStart, blockEnd);
    // Extract choice objects from block
    const choiceObjects = [];
    const choiceRegex = /\{\s*text:\s*'((?:[^'\\]|\\.)*)',\s*(next|ending):\s*'([a-zA-Z0-9_]+)'(?:,\s*condition:\s*([^\n]+?))?(?:,\s*hidden:\s*(true|false))?(?:,\s*effects:\s*([^\n]+?))?\s*\}/g;
    let cm;
    while ((cm = choiceRegex.exec(block)) !== null) {
        const choice = { text: cm[1].replace(/\\'/g, "'"), [cm[2]]: cm[3] };
        if (cm[4]) {
            try {
                choice.condition = eval('(' + cm[4] + ')');
            } catch {}
        }
        if (cm[5]) choice.hidden = cm[5] === 'true';
        if (cm[6]) {
            try {
                choice.effects = eval('(' + cm[6] + ')');
            } catch {}
        }
        choiceObjects.push(choice);
    }
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(...choiceObjects);
}

// Deduplicate by (text, next/ending)
function choiceKey(c) {
    return `${c.text}|${c.next || ''}|${c.ending || ''}`;
}
const deduped = new Map();
for (const [key, choices] of grouped) {
    const seen = new Set();
    const unique = [];
    for (const c of choices) {
        const k = choiceKey(c);
        if (!seen.has(k)) {
            seen.add(k);
            unique.push(c);
        }
    }
    deduped.set(key, unique);
}

// Rebuild choices block
function serializeChoice(c) {
    const targetKey = c.next ? 'next' : 'ending';
    const targetVal = c.next || c.ending;
    let s = `        {\n            text: '${c.text.replace(/'/g, "\\'")}',\n            ${targetKey}: '${targetVal}'`;
    if (c.condition) s += `,\n            condition: ${JSON.stringify(c.condition)}`;
    if (c.hidden) s += `,\n            hidden: true`;
    if (c.effects) s += `,\n            effects: ${JSON.stringify(c.effects)}`;
    s += '\n        }';
    return s;
}

const lines = [];
for (const [key, choices] of deduped) {
    if (choices.length === 0) continue;
    lines.push(`    // ${key}`);
    lines.push(`    '${key}': [`);
    lines.push(choices.map(serializeChoice).join(',\n'));
    lines.push('    ],');
}

const newChoicesBlock = '\n' + lines.join('\n') + '\n';
const newContent = content.slice(0, start + startMarker.length) + newChoicesBlock + content.slice(end);
writeFileSync(outputFile, newContent, 'utf-8');
console.log(`Merged ${matches.length} choice blocks into ${deduped.size} unique keys.`);
console.log(`Total unique choices: ${[...deduped.values()].reduce((a,b) => a + b.length, 0)}`);
