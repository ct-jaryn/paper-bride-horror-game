# 《回门》重构与主线扩展审查报告

生成时间：2026-07-06

## 改动摘要

1. **补全 37 个缺失 title 的场景**
   - 涉及文件：`stories/huimen/scenes/{coffin,escape,xiulan,zhou,paper,well,main_confront,main_ritual,main_escape,ancestral}.js`
   - 所有场景现已具备 title。

2. **拆分/条件化村街 choices**
   - 原 `huimen_exp_village_street` 一个场景承载 156 个 choices（可见 94 个），UI 严重过载。
   - 拆分为 4 个场景：
     - `huimen_exp_village_street`（主入口，15 choices，10 可见）
     - `huimen_exp_village_street_events_hub`（随机事件/物品，65 choices）
     - `huimen_exp_village_street_xiulan_hub`（秀兰互动，31 choices）
     - `huimen_exp_village_street_districts_hub`（外围区域，30 choices）
   - 枢纽入口在合适条件下解锁，避免信息轰炸。

3. **重复标题去重**
   - 为 40 组重复 title 增加上下文前缀，全部唯一化。
   - 示例：`开棺` → `祖母开棺`/`井底开棺`/`庙中开棺`；`井底` → `三代井底`/`深井井底`。

4. **增强主线推进感 + 路径深度扩展**
   - 新增主线场景 14 个，全部位于 `stories/huimen/scenes/main_extended.js`：
     - `huimen_village_gate`、`huimen_read_stele`、`huimen_paper_doll_warning`、`huimen_after_li_po`、`huimen_old_house_gate`
     - `huimen_observe_hall`、`huimen_enter_coffin_room`、`huimen_coffin_inspection`
     - `huimen_red_coffin_discovery`、`huimen_truth_revelation`、`huimen_seek_evidence`、`huimen_family_tree_confront`
     - `huimen_xiulan_forgiveness`、`huimen_prepare_burial`、`huimen_gather_villagers`、`huimen_choose_burial_site`、`huimen_burial_ritual`
   - 关键路径深度从约 11 步提升到 15 步（以 redemption 结局选择计）。
   - 修复了因重构断开的深层区域入口（山路深处、河灯、月光石、秀兰记忆等），结局可达率恢复到 96.9%。

## 关键路径示例

正常主线路径到 redemption：

```
prologue → huimen_village_gate → huimen_paper_doll_warning → huimen_old_house_gate → to_old_house → huimen_observe_hall → huimen_enter_coffin_room → ask_coffin → small_door → run_away_coffin → pretend_marry → beg_xiulan → huimen_xiulan_forgiveness → huimen_prepare_burial → huimen_gather_villagers → huimen_choose_burial_site → huimen_burial_ritual → [redemption]
```

共 17 个场景，18 次玩家选择。

## 验证结果

- `validate_stories.mjs`：全部 7 个故事通过。
- `test_all_endings_reachability.mjs`：228 个结局中 226 个结构可达，2 个为全局状态触发（madness / eternalNight）。
- `playthrough_test.mjs`：7 个故事各随机走查 10 次，无异常。

## 注意事项

- 村口/老宅的多个旧选择已重定向到新的主线必经场景，保留了快速通道的隐藏入口供多周目玩家使用。
- `huimen_exp_return_bury_xiulan` 不再直接跳到结局，而是进入安葬准备链，延长了多分支的后期节奏。
- 新增的 `huimen_gather_villagers` 让村民成为安葬见证，强化了"正名"主题。
