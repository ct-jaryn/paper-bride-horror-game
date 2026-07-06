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
import { scenes as exp3_loopStoneScenes } from './scenes/exp3_loop_stone.js';
import { scenes as exp3_loopPathsScenes } from './scenes/exp3_loop_paths.js';
import { scenes as exp3_loopResolutionScenes } from './scenes/exp3_loop_resolution.js';
import { scenes as exp3_main_paper_shopScenes } from './scenes/exp3_main_paper_shop.js';
import { scenes as exp3_main_wellScenes } from './scenes/exp3_main_well.js';
import { scenes as exp3_main_endingsScenes } from './scenes/exp3_main_endings.js';
import { scenes as exp3_xiulanScenes } from './scenes/exp3_xiulan.js';
import { scenes as exp3_xiulan_memoryScenes } from './scenes/exp3_xiulan_memory.js';
import { scenes as exp3_zhou_mansionCellarScenes } from './scenes/exp3_zhou_mansion_cellar.js';
import { scenes as exp3_zhou_mansionCourtyardScenes } from './scenes/exp3_zhou_mansion_courtyard.js';
import { scenes as exp3_zhou_mansionEntryScenes } from './scenes/exp3_zhou_mansion_entry.js';
import { scenes as exp_ancestral_hallScenes } from './scenes/exp_ancestral_hall.js';
import { scenes as exp_ancestral_spiritsScenes } from './scenes/exp_ancestral_spirits.js';
import { scenes as exp_ancestral_secretsScenes } from './scenes/exp_ancestral_secrets.js';
import { scenes as exp_coffin_stringsScenes } from './scenes/exp_coffin_strings.js';
import { scenes as exp_coffin_lanternScenes } from './scenes/exp_coffin_lantern.js';
import { scenes as exp_coffin_closureScenes } from './scenes/exp_coffin_closure.js';
import { scenes as exp_creatureScenes } from './scenes/exp_creature.js';
import { scenes as exp_familyScenes } from './scenes/exp_family.js';
import { scenes as exp_finalScenes } from './scenes/exp_final.js';
import { scenes as exp_moon_entranceScenes } from './scenes/exp_moon_entrance.js';
import { scenes as exp_moon_journeyScenes } from './scenes/exp_moon_journey.js';
import { scenes as exp_moon_memoryScenes } from './scenes/exp_moon_memory.js';
import { scenes as exp_mulberryMiscScenes } from './scenes/exp_mulberry_misc.js';
import { scenes as exp_mulberryReleaseScenes } from './scenes/exp_mulberry_release.js';
import { scenes as exp_mulberryTreeScenes } from './scenes/exp_mulberry_tree.js';
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
import { scenes as exp_village_street_events_voicesScenes } from './scenes/exp_village_street_events_voices.js';
import { scenes as exp_village_street_events_visionsScenes } from './scenes/exp_village_street_events_visions.js';
import { scenes as exp_village_street_events_hubScenes } from './scenes/exp_village_street_events_hub.js';
import { scenes as exp_village_street_keepsakes_guardiansScenes } from './scenes/exp_village_street_keepsakes_guardians.js';
import { scenes as exp_village_street_keepsakes_giftsScenes } from './scenes/exp_village_street_keepsakes_gifts.js';
import { scenes as exp_village_street_keepsakes_mementosScenes } from './scenes/exp_village_street_keepsakes_mementos.js';
import { scenes as exp_village_street_offeringsScenes } from './scenes/exp_village_street_offerings.js';
import { scenes as exp_village_street_spiritsScenes } from './scenes/exp_village_street_spirits.js';
import { scenes as exp_village_street_toysScenes } from './scenes/exp_village_street_toys.js';
import { scenes as exp_village_street_wellScenes } from './scenes/exp_village_street_well.js';
import { scenes as exp_village_street_xiulan_hubScenes } from './scenes/exp_village_street_xiulan_hub.js';
import { scenes as exp_weddingScenes } from './scenes/exp_wedding.js';
import { scenes as exp_wellScenes } from './scenes/exp_well.js';
import { scenes as exp_womenScenes } from './scenes/exp_women.js';
import { scenes as exp_xiulanScenes } from './scenes/exp_xiulan.js';
import { scenes as exp_xiulan_bond_nameScenes } from './scenes/exp_xiulan_bond_name.js';
import { scenes as exp_xiulan_bond_momentsScenes } from './scenes/exp_xiulan_bond_moments.js';
import { scenes as exp_xiulan_angerScenes } from './scenes/exp_xiulan_anger.js';
import { scenes as exp_xiulan_joy_artsScenes } from './scenes/exp_xiulan_joy_arts.js';
import { scenes as exp_xiulan_joy_dailyScenes } from './scenes/exp_xiulan_joy_daily.js';
import { scenes as exp_xiulan_memoryScenes } from './scenes/exp_xiulan_memory.js';
import { scenes as ghostScenes } from './scenes/ghost.js';
import { scenes as mainScenes } from './scenes/main.js';
import { scenes as main_confrontScenes } from './scenes/main_confront.js';
import { scenes as main_escape_pursuitScenes } from './scenes/main_escape_pursuit.js';
import { scenes as main_escape_flightScenes } from './scenes/main_escape_flight.js';
import { scenes as main_escape_endsScenes } from './scenes/main_escape_ends.js';
import { scenes as main_extendedArrivalScenes } from './scenes/main_extended_arrival.js';
import { scenes as main_extendedBurialScenes } from './scenes/main_extended_burial.js';
import { scenes as main_extendedHallScenes } from './scenes/main_extended_hall.js';
import { scenes as main_extendedTruthScenes } from './scenes/main_extended_truth.js';
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
    ...exp3_loopStoneScenes,
    ...exp3_loopPathsScenes,
    ...exp3_loopResolutionScenes,
    ...exp3_main_paper_shopScenes,
    ...exp3_main_wellScenes,
    ...exp3_main_endingsScenes,
    ...exp3_xiulanScenes,
    ...exp3_xiulan_memoryScenes,
    ...exp3_zhou_mansionCellarScenes,
    ...exp3_zhou_mansionCourtyardScenes,
    ...exp3_zhou_mansionEntryScenes,
    ...exp_ancestral_hallScenes,
    ...exp_ancestral_spiritsScenes,
    ...exp_ancestral_secretsScenes,
    ...exp_coffin_stringsScenes,
    ...exp_coffin_lanternScenes,
    ...exp_coffin_closureScenes,
    ...exp_creatureScenes,
    ...exp_familyScenes,
    ...exp_finalScenes,
    ...exp_moon_entranceScenes,
    ...exp_moon_journeyScenes,
    ...exp_moon_memoryScenes,
    ...exp_mulberryTreeScenes,
    ...exp_mulberryReleaseScenes,
    ...exp_mulberryMiscScenes,
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
    ...exp_village_street_events_voicesScenes,
    ...exp_village_street_events_visionsScenes,
    ...exp_village_street_events_hubScenes,
    ...exp_village_street_keepsakes_guardiansScenes,
    ...exp_village_street_keepsakes_giftsScenes,
    ...exp_village_street_keepsakes_mementosScenes,
    ...exp_village_street_offeringsScenes,
    ...exp_village_street_spiritsScenes,
    ...exp_village_street_toysScenes,
    ...exp_village_street_wellScenes,
    ...exp_village_street_xiulan_hubScenes,
    ...exp_weddingScenes,
    ...exp_wellScenes,
    ...exp_womenScenes,
    ...exp_xiulanScenes,
    ...exp_xiulan_bond_nameScenes,
    ...exp_xiulan_bond_momentsScenes,
    ...exp_xiulan_angerScenes,
    ...exp_xiulan_joy_artsScenes,
    ...exp_xiulan_joy_dailyScenes,
    ...exp_xiulan_memoryScenes,
    ...ghostScenes,
    ...mainScenes,
    ...main_confrontScenes,
    ...main_escape_pursuitScenes,
    ...main_escape_flightScenes,
    ...main_escape_endsScenes,
    ...main_extendedArrivalScenes,
    ...main_extendedBurialScenes,
    ...main_extendedHallScenes,
    ...main_extendedTruthScenes,
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
