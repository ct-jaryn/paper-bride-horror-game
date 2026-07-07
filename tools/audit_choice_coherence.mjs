import { StoryManifest } from '../stories/manifest.js';

const storyId = 'huimen';
const module = await import(`/workspace/stories/${storyId}/index.js`);
const scenes = module.StoryData;

const actionKeywords = ['去', '走', '跑', '推', '敲', '看', '望', '打开', '点燃', '烧', '喝', '吃', '说', '问', '追', '躲', '回', '离开', '进去', '跪下', '拜', '挖', '埋', '换', '穿', '戴上', '摘下'];
const locationKeywords = ['村', '宅', '井', '庙', '树', '街', '堂', '房', '门', '路', '后院', '灵堂', '喜房', '山', '河边', '桑树', '槐树', '纸扎铺', '祖祠', '学堂', '裁缝', '医馆'];

function firstParagraph(text) {
  if (!text) return '';
  return text.split('\n').map(s => s.trim()).filter(Boolean)[0] || '';
}

function normalize(text) {
  return text.replace(/\[\/?[a-zA-Z]+\]/g, '').replace(/[，。！？、：；""''（）]/g, '').trim();
}

function hasOverlap(a, b) {
  const na = normalize(a);
  const nb = normalize(b);
  // 简单检查：选项中的动作或地点词是否出现在目标场景首段
  for (const word of actionKeywords) {
    if (na.includes(word) && nb.includes(word)) return true;
  }
  for (const word of locationKeywords) {
    if (na.includes(word) && nb.includes(word)) return true;
  }
  return false;
}

function suspiciousScore(choiceText, targetText) {
  const nb = normalize(targetText);
  let score = 0;
  const nChoice = normalize(choiceText);
  // 选项含动作词，目标场景完全没有相关动作/地点
  if (actionKeywords.some(w => nChoice.includes(w))) {
    const hasAction = actionKeywords.some(w => nb.includes(w));
    if (!hasAction) score += 2;
  }
  // 选项含地点词，目标场景完全没有地点
  if (locationKeywords.some(w => nChoice.includes(w))) {
    const hasLoc = locationKeywords.some(w => nb.includes(w));
    if (!hasLoc) score += 2;
  }
  // 选项是问句，目标场景没有直接回答
  if (choiceText.includes('？') || choiceText.includes('?')) {
    if (!nb.includes('你') && !nb.includes('说') && !nb.includes('道')) score += 1;
  }
  // 目标场景首段以"你"开头，承接较好
  if (nb.startsWith('你')) score -= 1;
  return score;
}

const issues = [];

for (const sceneId in scenes) {
  const scene = scenes[sceneId];
  if (!scene.choices) continue;
  for (const choice of scene.choices) {
    if (!choice.next) continue;
    const target = scenes[choice.next];
    if (!target) {
      issues.push({ sceneId, choiceText: choice.text, next: choice.next, severity: 'P0', reason: '目标场景不存在' });
      continue;
    }
    const targetFirst = firstParagraph(target.text);
    const score = suspiciousScore(choice.text, targetFirst);
    if (score >= 3) {
      issues.push({ sceneId, choiceText: choice.text, next: choice.next, targetFirst, severity: 'P1', reason: '选项动作/地点与目标场景首段承接弱' });
    } else if (score === 2) {
      issues.push({ sceneId, choiceText: choice.text, next: choice.next, targetFirst, severity: 'P2', reason: '选项与目标场景首段可能不连贯' });
    }
  }
}

issues.sort((a, b) => {
  const order = { P0: 0, P1: 1, P2: 2 };
  return order[a.severity] - order[b.severity];
});

console.log(`\n选项-场景连贯性审查：共 ${issues.length} 处可疑（P0: ${issues.filter(i => i.severity === 'P0').length}, P1: ${issues.filter(i => i.severity === 'P1').length}, P2: ${issues.filter(i => i.severity === 'P2').length}）\n`);

for (const issue of issues) {
  console.log(`[${issue.severity}] ${issue.sceneId} -> ${issue.next}`);
  console.log(`  选项: ${issue.choiceText}`);
  if (issue.targetFirst) console.log(`  目标首段: ${issue.targetFirst.slice(0, 120)}...`);
  console.log(`  原因: ${issue.reason}\n`);
}

// 输出到文件便于后续处理
import { writeFileSync } from 'fs';
writeFileSync('/tmp/opencode/huimen_choice_coherence.json', JSON.stringify(issues, null, 2), 'utf-8');
console.log('详细结果已写入 /tmp/opencode/huimen_choice_coherence.json');
