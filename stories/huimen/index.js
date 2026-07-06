/**
 * 《回门》故事入口
 */

import { scenes as ancestralScenes } from './scenes/ancestral.js';
import { scenes as coffinScenes } from './scenes/coffin.js';
import { scenes as escapeScenes } from './scenes/escape.js';
import { scenes as exp2_abandoned_hallScenes } from './scenes/exp2_abandoned_hall.js';
import { scenes as exp2_ancestralScenes } from './scenes/exp2_ancestral.js';
import { scenes as exp2_blind_grannyScenes } from './scenes/exp2_blind_granny.js';
import { scenes as exp2_blood_contractScenes } from './scenes/exp2_blood_contract.js';
import { scenes as exp2_child_ghostScenes } from './scenes/exp2_child_ghost.js';
import { scenes as exp2_coffinScenes } from './scenes/exp2_coffin.js';
import { scenes as exp2_cowherdScenes } from './scenes/exp2_cowherd.js';
import { scenes as exp2_granaryScenes } from './scenes/exp2_granary.js';
import { scenes as exp2_graveyardScenes } from './scenes/exp2_graveyard.js';
import { scenes as exp2_kitchenScenes } from './scenes/exp2_kitchen.js';
import { scenes as exp2_mainScenes } from './scenes/exp2_main.js';
import { scenes as exp2_medicineScenes } from './scenes/exp2_medicine.js';
import { scenes as exp2_midwifeScenes } from './scenes/exp2_midwife.js';
import { scenes as exp2_mirror_lakeScenes } from './scenes/exp2_mirror_lake.js';
import { scenes as exp2_moonlitScenes } from './scenes/exp2_moonlit.js';
import { scenes as exp2_mountainScenes } from './scenes/exp2_mountain.js';
import { scenes as exp2_mulberryScenes } from './scenes/exp2_mulberry.js';
import { scenes as exp2_nameless_stonesScenes } from './scenes/exp2_nameless_stones.js';
import { scenes as exp2_old_treeScenes } from './scenes/exp2_old_tree.js';
import { scenes as exp2_paperScenes } from './scenes/exp2_paper.js';
import { scenes as exp2_paper_makerScenes } from './scenes/exp2_paper_maker.js';
import { scenes as exp2_riverScenes } from './scenes/exp2_river.js';
import { scenes as exp2_river_godScenes } from './scenes/exp2_river_god.js';
import { scenes as exp2_ruinsScenes } from './scenes/exp2_ruins.js';
import { scenes as exp2_schoolScenes } from './scenes/exp2_school.js';
import { scenes as exp2_secret_tunnelScenes } from './scenes/exp2_secret_tunnel.js';
import { scenes as exp2_tailorScenes } from './scenes/exp2_tailor.js';
import { scenes as exp2_theaterScenes } from './scenes/exp2_theater.js';
import { scenes as exp2_village_headScenes } from './scenes/exp2_village_head.js';
import { scenes as exp2_wellScenes } from './scenes/exp2_well.js';
import { scenes as exp2_xiulan_memoryScenes } from './scenes/exp2_xiulan_memory.js';
import { scenes as exp3_carpenter_liScenes } from './scenes/exp3_carpenter_li.js';
import { scenes as exp3_clan_headScenes } from './scenes/exp3_clan_head.js';
import { scenes as exp3_granny_wangScenes } from './scenes/exp3_granny_wang.js';
import { scenes as exp3_loopScenes } from './scenes/exp3_loop.js';
import { scenes as exp3_mainScenes } from './scenes/exp3_main.js';
import { scenes as exp3_xiulanScenes } from './scenes/exp3_xiulan.js';
import { scenes as exp3_xiulan_memoryScenes } from './scenes/exp3_xiulan_memory.js';
import { scenes as exp3_zhou_mansionScenes } from './scenes/exp3_zhou_mansion.js';
import { scenes as exp_ancestralScenes } from './scenes/exp_ancestral.js';
import { scenes as exp_coffinScenes } from './scenes/exp_coffin.js';
import { scenes as exp_creatureScenes } from './scenes/exp_creature.js';
import { scenes as exp_familyScenes } from './scenes/exp_family.js';
import { scenes as exp_finalScenes } from './scenes/exp_final.js';
import { scenes as exp_moonScenes } from './scenes/exp_moon.js';
import { scenes as exp_mulberryScenes } from './scenes/exp_mulberry.js';
import { scenes as exp_paperScenes } from './scenes/exp_paper.js';
import { scenes as exp_paper_dollScenes } from './scenes/exp_paper_doll.js';
import { scenes as exp_paper_offeringScenes } from './scenes/exp_paper_offering.js';
import { scenes as exp_paper_riverScenes } from './scenes/exp_paper_river.js';
import { scenes as exp_paper_shopScenes } from './scenes/exp_paper_shop.js';
import { scenes as exp_ritualScenes } from './scenes/exp_ritual.js';
import { scenes as exp_ruinsScenes } from './scenes/exp_ruins.js';
import { scenes as exp_street_encounterScenes } from './scenes/exp_street_encounter.js';
import { scenes as exp_street_fogScenes } from './scenes/exp_street_fog.js';
import { scenes as exp_street_girlScenes } from './scenes/exp_street_girl.js';
import { scenes as exp_street_mirrorScenes } from './scenes/exp_street_mirror.js';
import { scenes as exp_street_operaScenes } from './scenes/exp_street_opera.js';
import { scenes as exp_street_rainScenes } from './scenes/exp_street_rain.js';
import { scenes as exp_templeScenes } from './scenes/exp_temple.js';
import { scenes as exp_useScenes } from './scenes/exp_use.js';
import { scenes as exp_villageScenes } from './scenes/exp_village.js';
import { scenes as exp_village_street_coreScenes } from './scenes/exp_village_street_core.js';
import { scenes as exp_village_street_districts_hubScenes } from './scenes/exp_village_street_districts_hub.js';
import { scenes as exp_village_street_eventsScenes } from './scenes/exp_village_street_events.js';
import { scenes as exp_village_street_events_hubScenes } from './scenes/exp_village_street_events_hub.js';
import { scenes as exp_village_street_offeringsScenes } from './scenes/exp_village_street_offerings.js';
import { scenes as exp_village_street_toysScenes } from './scenes/exp_village_street_toys.js';
import { scenes as exp_village_street_wellScenes } from './scenes/exp_village_street_well.js';
import { scenes as exp_village_street_xiulan_hubScenes } from './scenes/exp_village_street_xiulan_hub.js';
import { scenes as exp_weddingScenes } from './scenes/exp_wedding.js';
import { scenes as exp_wellScenes } from './scenes/exp_well.js';
import { scenes as exp_womenScenes } from './scenes/exp_women.js';
import { scenes as exp_xiulanScenes } from './scenes/exp_xiulan.js';
import { scenes as exp_xiulan_bondScenes } from './scenes/exp_xiulan_bond.js';
import { scenes as exp_xiulan_dailyScenes } from './scenes/exp_xiulan_daily.js';
import { scenes as exp_xiulan_memoryScenes } from './scenes/exp_xiulan_memory.js';
import { scenes as ghostScenes } from './scenes/ghost.js';
import { scenes as mainScenes } from './scenes/main.js';
import { scenes as main_confrontScenes } from './scenes/main_confront.js';
import { scenes as main_escapeScenes } from './scenes/main_escape.js';
import { scenes as main_extendedScenes } from './scenes/main_extended.js';
import { scenes as main_investigationScenes } from './scenes/main_investigation.js';
import { scenes as main_locksScenes } from './scenes/main_locks.js';
import { scenes as main_ritualScenes } from './scenes/main_ritual.js';
import { scenes as main_safeScenes } from './scenes/main_safe.js';
import { scenes as main_timeScenes } from './scenes/main_time.js';
import { scenes as paperScenes } from './scenes/paper.js';
import { scenes as prologueScenes } from './scenes/prologue.js';
import { scenes as wellScenes } from './scenes/well.js';
import { scenes as xiulanScenes } from './scenes/xiulan.js';
import { scenes as zhouScenes } from './scenes/zhou.js';
import { Endings } from './endings/index.js';
import { NPCs } from './npcs/index.js';

export const StoryData = {
    ...ancestralScenes,
    ...coffinScenes,
    ...escapeScenes,
    ...exp2_abandoned_hallScenes,
    ...exp2_ancestralScenes,
    ...exp2_blind_grannyScenes,
    ...exp2_blood_contractScenes,
    ...exp2_child_ghostScenes,
    ...exp2_coffinScenes,
    ...exp2_cowherdScenes,
    ...exp2_granaryScenes,
    ...exp2_graveyardScenes,
    ...exp2_kitchenScenes,
    ...exp2_mainScenes,
    ...exp2_medicineScenes,
    ...exp2_midwifeScenes,
    ...exp2_mirror_lakeScenes,
    ...exp2_moonlitScenes,
    ...exp2_mountainScenes,
    ...exp2_mulberryScenes,
    ...exp2_nameless_stonesScenes,
    ...exp2_old_treeScenes,
    ...exp2_paperScenes,
    ...exp2_paper_makerScenes,
    ...exp2_riverScenes,
    ...exp2_river_godScenes,
    ...exp2_ruinsScenes,
    ...exp2_schoolScenes,
    ...exp2_secret_tunnelScenes,
    ...exp2_tailorScenes,
    ...exp2_theaterScenes,
    ...exp2_village_headScenes,
    ...exp2_wellScenes,
    ...exp2_xiulan_memoryScenes,
    ...exp3_carpenter_liScenes,
    ...exp3_clan_headScenes,
    ...exp3_granny_wangScenes,
    ...exp3_loopScenes,
    ...exp3_mainScenes,
    ...exp3_xiulanScenes,
    ...exp3_xiulan_memoryScenes,
    ...exp3_zhou_mansionScenes,
    ...exp_ancestralScenes,
    ...exp_coffinScenes,
    ...exp_creatureScenes,
    ...exp_familyScenes,
    ...exp_finalScenes,
    ...exp_moonScenes,
    ...exp_mulberryScenes,
    ...exp_paperScenes,
    ...exp_paper_dollScenes,
    ...exp_paper_offeringScenes,
    ...exp_paper_riverScenes,
    ...exp_paper_shopScenes,
    ...exp_ritualScenes,
    ...exp_ruinsScenes,
    ...exp_street_encounterScenes,
    ...exp_street_fogScenes,
    ...exp_street_girlScenes,
    ...exp_street_mirrorScenes,
    ...exp_street_operaScenes,
    ...exp_street_rainScenes,
    ...exp_templeScenes,
    ...exp_useScenes,
    ...exp_villageScenes,
    ...exp_village_street_coreScenes,
    ...exp_village_street_districts_hubScenes,
    ...exp_village_street_eventsScenes,
    ...exp_village_street_events_hubScenes,
    ...exp_village_street_offeringsScenes,
    ...exp_village_street_toysScenes,
    ...exp_village_street_wellScenes,
    ...exp_village_street_xiulan_hubScenes,
    ...exp_weddingScenes,
    ...exp_wellScenes,
    ...exp_womenScenes,
    ...exp_xiulanScenes,
    ...exp_xiulan_bondScenes,
    ...exp_xiulan_dailyScenes,
    ...exp_xiulan_memoryScenes,
    ...ghostScenes,
    ...mainScenes,
    ...main_confrontScenes,
    ...main_escapeScenes,
    ...main_extendedScenes,
    ...main_investigationScenes,
    ...main_locksScenes,
    ...main_ritualScenes,
    ...main_safeScenes,
    ...main_timeScenes,
    ...paperScenes,
    ...prologueScenes,
    ...wellScenes,
    ...xiulanScenes,
    ...zhouScenes,
};

export { Endings, NPCs };
export { StoryConfig } from './config.js';
