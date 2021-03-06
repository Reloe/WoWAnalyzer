import CoreCombatLogParser from 'Parser/Core/CombatLogParser';
import DamageDone from 'Parser/Core/Modules/DamageDone';

import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
import Abilities from './Modules/Features/Abilities';
import CooldownThroughputTracker from './Modules/Features/CooldownThroughputTracker';
import CancelledCasts from '../Shared/Modules/Features/CancelledCasts';

import MirrorImage from '../Shared/Modules/Features/MirrorImage';
import UnstableMagic from '../Shared/Modules/Features/UnstableMagic';
import Kindling from './Modules/Features/Kindling';
import PhoenixsFlames from './Modules/Features/PhoenixsFlames';

import Tier20_4set from './Modules/Items/Tier20_4set';
import ShardOfTheExodar from '../Shared/Modules/Items/ShardOfTheExodar';
import SoulOfTheArchmage from './Modules/Items/SoulOfTheArchmage';
import DarcklisDragonfireDiadem from './Modules/Items/DarcklisDragonfireDiadem';
import ContainedInfernalCore from './Modules/Items/ContainedInfernalCore';
import PyrotexIgnitionCloth from './Modules/Items/PyrotexIgnitionCloth';


class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Features
    alwaysBeCasting: AlwaysBeCasting,
    abilities: Abilities,
    cooldownThroughputTracker: CooldownThroughputTracker,
    damageDone: [DamageDone, { showStatistic: true }],
    cancelledCasts: CancelledCasts,
    phoenixsFlames: PhoenixsFlames,

    // Talents
    mirrorImage: MirrorImage,
    unstableMagic: UnstableMagic,
    kindling: Kindling,

	  //Items
	  tier20_4set: Tier20_4set,
    shardOfTheExodar: ShardOfTheExodar,
    soulOfTheArchmage: SoulOfTheArchmage,
    darcklisDragonfireDiadem: DarcklisDragonfireDiadem,
    containedInfernalCore: ContainedInfernalCore,
    pyrotexIgnitionCloth: PyrotexIgnitionCloth,

  };
}

export default CombatLogParser;
