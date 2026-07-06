# 《回门》故事连贯性审查报告

## 1. 规模概览

- **场景总数**: 663
- **结局总数**: 65
- **从 prologue 可达场景**: 663 / 663 (100.0%)
- **可达结局**: 63 / 65 (96.9%)

## 2. 可达性与结构

### 不可达场景（0 个）
- 无

### 不可达结局（2 个）
- `madness`: 死亡结局 · 疯魔
- `eternalNight`: 死亡结局 · 永夜

> 注：`madness` 与 `eternalNight` 为全局 checkGameOver 触发结局，由运行时状态（sanity ≤ 0 / time ≥ 1860）触发，不依赖 choices 引用。

### 距离分布

- **最大距 prologue 距离**: 11 步
- **最短结局路径**: 2 步（`approach_coffin` -> ghostMarriage）
- **最长结局路径**: 9 步（`huimen_exp3_ending_ancestral_cellar_scene` -> huimen_exp3_ending_ancestral_cellar）

### Hub 场景（入度 ≥ 10）

| 场景 ID | 入度 | 出度 | 标题 |
|---|---|---|---|
| `huimen_exp_village_street` | 322 | 154 | 村街 |
| `huimen_exp2_riverbank` | 40 | 5 | 河边 |
| `to_old_house` | 22 | 10 | 周家老宅 |
| `huimen_exp_paper_shop` | 15 | 10 | 纸扎铺 |
| `huimen_exp2_village_head_house` | 13 | 4 | 村长家 |
| `huimen_exp2_graveyard` | 11 | 4 | 祖坟地 |
| `huimen_exp_well_night` | 11 | 11 | 夜井 |

`huimen_exp_village_street` 是超级 hub（入度 314，出度 154），说明村庄街道是探索中枢。

## 3. 叙事一致性问题

### 缺少 title 的场景（37 个）

以下场景缺少 `title` 字段，会在 UI 中显示为空标题：

- `defend_family`
- `observe_red_strings`
- `approach_coffin`
- `run_away_coffin`
- `open_red_coffin`
- `resist_marriage`
- `run_to_mountain`
- `ask_who_are_you`
- `ask_really_me`
- `wait_chance`
- `pretend_marry`
- `pull_nails_barehand`
- `corpse_bride_link`
- `chase_li_po`
- `break_free`
- `pretend_comply`
- `break_window`
- `hold_breath`
- `hide_in_woodshed`
- `burn_woodshed`
- `sneak_back_yard`
- `charge_exit`
- `paralyzed`
- `turn_around`
- `ask_meaning`
- `swear_justice`
- `find_bones`
- `give_letter`
- `small_door`
- `pull_back_hand`
- `burn_paper_money`
- `inspect_paper_dolls`
- `mirror_well`
- `struggle_in_well`
- `ask_xiulan`
- `beg_xiulan`
- `zhou_bloodline_revelation`

> 这些多为第一章主线核心场景，建议优先补全标题。

### 重复标题（38 组）

以下标题被多个场景共用，可能导致玩家在不同位置看到相同标题：

- "再唱": `huimen_exp2_blind_granny_sing_more`, `huimen_exp_xiulan_sing_more`
- "询问": `huimen_exp2_blind_granny_ask`, `huimen_exp2_child_ghost_ask`
- "点灯": `huimen_exp2_granary_light`, `huimen_exp2_river_lantern_light`, `huimen_exp3_zhou_mansion_cellar_light`
- "问解脱": `huimen_exp2_granary_soul_ask`, `huimen_exp2_stone_bridge_ask`
- "祭拜": `huimen_exp2_graveyard_bow`, `huimen_exp2_mountain_path_bow`, `huimen_exp3_well_bottom_bow`
- "焚纸": `huimen_exp2_ancestor_grave_burn`, `huimen_exp3_zhou_mansion_cellar_burn`
- "对话": `huimen_exp2_kitchen_talk`, `huimen_exp2_midwife_talk`
- "焚符": `huimen_exp2_kitchen_stove_burn`, `huimen_exp_burn_grandmother_talisman`
- "拉人": `huimen_exp2_mirror_lake_pull`, `huimen_exp_street_hand_pull`
- "正名": `huimen_exp2_mountain_path_rename`, `huimen_exp_restore_xiulan_name`
- "读纸": `huimen_exp2_nameless_stones_read`, `huimen_exp2_village_head_vault_read`
- "刻字": `huimen_exp2_old_tree_carve`, `huimen_exp2_school_desk_carve`, `huimen_exp2_xiulan_memory_well_help`
- "纸船": `huimen_exp2_paper_boat_read`, `huimen_exp_street_paper_boat`
- "纸扎铺地下室": `huimen_exp2_paper_shop_basement`, `huimen_exp3_paper_shop_basement`
- "焚偶": `huimen_exp2_paper_shop_basement_burn`, `huimen_exp2_ruins_doll_burn`, `huimen_exp_burn_dolls_alt`
- "解脱": `huimen_exp2_paper_maker_release`, `huimen_exp_grandfather_release`
- "渡河": `huimen_exp2_river_cross`, `huimen_exp_moonlit_river_cross`
- "刻名": `huimen_exp2_river_god_carve_xiulan`, `huimen_exp3_carpenter_li_why`, `huimen_exp3_zhou_mansion_cellar_name_stele`, `huimen_exp_bridge_name`, `huimen_exp_village_heart_names`
- "嫁衣": `huimen_exp2_tailor_dress`, `huimen_exp3_xiulan_wish_dress`, `huimen_exp_xiulan_sew`
- "对质": `huimen_exp2_village_head_confront`, `huimen_exp_grandmother_confront`
- "驳斥": `huimen_exp2_village_head_refute`, `huimen_exp_village_street_laugh_refute`
- "绣花": `huimen_exp2_xiulan_memory_childhood_sew`, `huimen_exp3_xiulan_memory_childhood_sew`
- "拥抱": `huimen_exp2_xiulan_memory_betrayal_hug`, `huimen_exp_final_hug`
- "等待": `huimen_exp2_xiulan_memory_wedding_wait`, `huimen_exp3_loop_wait`
- "同行": `huimen_exp3_carpenter_li_join`, `huimen_exp3_loop_dawn_together`
- "承诺": `huimen_exp3_carpenter_li_promise`, `huimen_exp_xiulan_wish_promise`
- "烧鞋": `huimen_exp3_granny_wang_shoes_burn`, `huimen_exp_village_street_lost_shoe_burn`
- "闭眼": `huimen_exp3_loop_eyes_closed`, `huimen_exp3_xiulan_memory_well_death_close`
- "井底": `huimen_exp3_well_bottom`, `huimen_exp_well_bottom`
- "还名": `huimen_exp3_zhou_mansion_backyard_chisel`, `huimen_exp_use_stone_lion_name`
- "地窖": `huimen_exp3_zhou_mansion_cellar`, `huimen_exp_ruins_cellar`
- "开棺": `huimen_exp_red_coffin_open_alt`, `huimen_exp_temple_release`
- "纸门": `huimen_exp_gate_of_paper_alt`, `huimen_exp_village_street_paper_door`
- "信归": `huimen_exp_ruins_letter_show`, `huimen_exp_village_street_letter_box_give`
- "旧照": `huimen_exp_ruins_photo`, `huimen_exp_show_xiulan_photo`
- "护身": `huimen_exp_use_child_tooth`, `use_talisman_ghost`
- "井语": `huimen_exp_well_whisper`, `huimen_exp_well_whisper_alt`
- "井语成录": `huimen_exp_well_whisper_truth`, `huimen_exp_well_truth_record`

> 建议为重复标题的场景添加更具体的副标题或前缀。

### 选择数量分布

| 选项数 | 场景数量 |
|---|---|
| 0 | 20 |
| 1 | 254 |
| 2 | 276 |
| 3 | 82 |
| 4 | 17 |
| 5 | 4 |
| 6 | 3 |
| 7 | 1 |
| 10 | 2 |
| 11 | 2 |
| 12 | 1 |
| 156 | 1 |

**严重问题**: `huimen_exp_village_street`（村街）有 **156 个 choices**，其中 101 个为可见选项。这会造成严重的选择困难，破坏叙事节奏。

建议将该场景拆分为多个子场景或菜单：
- `村街-去向`: 仅保留主要地点入口（井、纸扎铺、庙、祖祠、桑树、废墟、月光路等）
- `村街-秀兰`: 当 `xiulanMercy` 等 flag 满足时出现
- `村街-二度探索`: 当相关线索 flag 满足时出现
- `村街-隐藏事件`: 当 yin 值或时间条件满足时出现

## 4. 循环分析

检测到大量 2 节点循环（约 170 组），主要发生在：
- `huimen_exp_village_street` 与各个探索子场景之间
- `to_old_house` 与各个老宅子场景之间
- 各支线场景与返回节点的往返

这些循环多为探索型 hub-and-spoke 结构，允许玩家自由往返，**属于设计意图**。但需注意是否存在让玩家无限绕圈而无法推进主线的“软锁”情况。

## 5. 深度评估

### 5.1 路径深度偏浅

- 最大深度仅 11 步，对于 663 个场景的故事来说偏浅。
- 大量场景集中在距离 2-6 的范围内，说明故事结构非常扁平。
- 最短结局仅需 2 步，玩家可能快速抵达结局而错过大量内容。

### 5.2 Hub 过度集中

`huimen_exp_village_street` 承担了 322 个入边，几乎所有支线都从这里发散。虽然方便探索，但会导致：
- 叙事节奏被打断
- 玩家容易迷失在大量选择中
- 主线推进感弱

### 5.3 扩展机制已存在但未充分验证

故事中已加入时辰（`shichen_*`）、调查线索（`investigate_*`）、安全屋（`safe_house`）、谜题锁（`old_house_door_locked` / `true_ending_gate`）等 1-2 小时扩展机制，但：
- 这些场景在主线中的触发频率和路径深度需要进一步验证
- `true_ending_gate` 依赖 `clues_assembled` flag，需要确认线索收集路径是否完整闭环

## 6. 优先修复建议

1. **补全 37 个缺失 title**: 特别是主线核心场景（`chase_li_po`、`break_free`、`pretend_marry`、`ask_xiulan` 等）。
2. **连接 `use_talisman_ghost`**: 当前无任何场景引用该场景。建议在 `inspect_paper_dolls` 或类似纸人场景中添加一条使用护身符的 conditional choice 指向它。
3. **减少重复标题**: 为 "再唱"、"询问"、"点灯" 等通用标题增加上下文前缀。
4. **增强主线推进感**: 考虑在 `huimen_exp_village_street` 等大型 hub 中，根据玩家已访问的关键场景动态隐藏部分返回选项，避免无限循环。
5. **验证扩展机制闭环**: 跑通一条完整收集线索并抵达 `true_ending_gate` 的路径，确认所有必需 flag 和 item 都能获得。
6. **路径深度优化**: 如果目标是 1-2 小时体验，可考虑增加一些“必经之路”的场景链，将最大深度从 11 步提升到 15-20 步。

---
*报告生成时间: 2026-07-06T13:24:07.921Z*
*数据来源: /workspace/stories/huimen/index.js*
