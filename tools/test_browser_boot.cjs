const { JSDOM } = require('jsdom');
const { readFileSync } = require('fs');
const { join } = require('path');

const workspace = join(__dirname, '..');

const html = readFileSync(join(workspace, 'index.html'), 'utf-8');
const dom = new JSDOM(html, {
    url: 'http://localhost:8765/index.html',
    runScripts: 'dangerously',
    resources: 'usable',
    pretendToBeVisual: true
});

const templateCode = readFileSync(join(workspace, 'js/templates/index.js'), 'utf-8');

const files = [
    'titleScreen.js', 'storySelectScreen.js', 'gameScreen.js',
    'endingScreen.js', 'achievementsScreen.js', 'overlayScreens.js', 'index.js'
];
let evalCode = '';
for (const f of files) {
    let code = readFileSync(join(workspace, 'js/templates', f), 'utf-8');
    code = code.replace(/import\s+.*?from\s+'.*?';\n/g, '');
    code = code.replace(/export\s+const\s+(\w+)\s+=\s+`/g, 'const $1 = `');
    code = code.replace(/export\s+function\s+renderScreens/, 'function renderScreens');
    evalCode += code + '\n';
}
evalCode += '\nrenderScreens();';

try {
    dom.window.eval(evalCode);
    const container = dom.window.document.getElementById('game-container');
    console.log('container children count:', container.children.length);
    const screens = ['title-screen','story-select-screen','game-screen','ending-screen','achievements-screen','cg-overlay','shop-screen','record-overlay','journey-overlay','pause-overlay'];
    for (const id of screens) {
        const el = dom.window.document.getElementById(id);
        console.log(id, el ? 'ok' : 'MISSING');
    }
} catch (e) {
    console.error('error:', e.message);
}
