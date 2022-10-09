import Image from 'next/image';
import { useState } from 'react';

import dispalyPic from '../resources/display.png';

import arrow_blue from '../public/assets/arrowblue.png';
// import arrow_green from '../public/assets/arrowgreen.png';
import arrow_red from '../public/assets/arrowred.png';

// Section1
import FSpriteCagli from '/public/assets/TabletCharacter/FSpriteCagli.png';
import FSpriteLyz from '/public/assets/TabletCharacter/FSpriteLyz.png';
import SpriteCrow from '/public/assets/TabletCharacter/SpriteCrow.png';
import SpriteNora1 from '/public/assets/TabletCharacter/SpriteNora1.png';
import SpriteNora2 from '/public/assets/TabletCharacter/SpriteNora2.png';
import SpriteNora3 from '/public/assets/TabletCharacter/SpriteNora3.png';
import SpriteNyx from '/public/assets/TabletCharacter/SpriteNyx.png';
import SpriteRoy from '/public/assets/TabletCharacter/SpriteRoy.png';
import SpriteScarlett1 from '/public/assets/TabletCharacter/SpriteScarlett1.png';
import SpriteScarlett2 from '/public/assets/TabletCharacter/SpriteScarlett2.png';
import SpriteScarlett3 from '/public/assets/TabletCharacter/SpriteScarlett3.png';
import SpriteZayn1 from '/public/assets/TabletCharacter/SpriteZayn1.png';
import SpriteZayn2 from '/public/assets/TabletCharacter/SpriteZayn2.png';
import SpriteZayn3 from '/public/assets/TabletCharacter/SpriteZayn3.png';

const display1 = [
  FSpriteCagli,
  FSpriteLyz,
  SpriteCrow,
  SpriteNora1,
  SpriteNora2,
  SpriteNora3,
  SpriteNyx,
  SpriteRoy,
  SpriteScarlett1,
  SpriteScarlett2,
  SpriteScarlett3,
  SpriteZayn1,
  SpriteZayn2,
  SpriteZayn3,
];

// Section2
import absorend from '/public/assets/TabletIcon/absorend.png';
import Axe from '/public/assets/TabletIcon/Axe.png';
import BladeZ from '/public/assets/TabletIcon/BladeZ.png';
import BlasterOD from '/public/assets/TabletIcon/BlasterOD.png';
import Bookclosed from '/public/assets/TabletIcon/Bookclosed.png';
import Bookss from '/public/assets/TabletIcon/Bookss.png';
import Broadsword from '/public/assets/TabletIcon/Broadsword.png';
import Dagger from '/public/assets/TabletIcon/Dagger.png';
import Earth from '/public/assets/TabletIcon/Earth.png';
import Fire from '/public/assets/TabletIcon/Fire.png';
import Guandao from '/public/assets/TabletIcon/Guandao.png';
import Inspectss from '/public/assets/TabletIcon/Inspectss.png';
import Kusarigama from '/public/assets/TabletIcon/Kusarigama.png';
import Movess from '/public/assets/TabletIcon/Movess.png';
import Odachi from '/public/assets/TabletIcon/Odachi.png';
import regen from '/public/assets/TabletIcon/regen.png';
import Rend from '/public/assets/TabletIcon/Rend.png';
import retali from '/public/assets/TabletIcon/retali.png';
import Scythe from '/public/assets/TabletIcon/Scythe.png';
import thornedtail from '/public/assets/TabletIcon/thornedtail.png';
import Vial from '/public/assets/TabletIcon/Vial.png';
import Void from '/public/assets/TabletIcon/Void.png';
import Water from '/public/assets/TabletIcon/Water.png';
import Wind from '/public/assets/TabletIcon/Wind.png';

const dispaly2 = [
  absorend,
  Axe,
  BladeZ,
  BlasterOD,
  Bookclosed,
  Bookss,
  Broadsword,
  Dagger,
  Earth,
  Fire,
  Guandao,
  Inspectss,
  Kusarigama,
  Movess,
  Odachi,
  regen,
  Rend,
  retali,
  Scythe,
  thornedtail,
  Vial,
  Void,
  Water,
  Wind,
];

// Section3
import acurate_angel from '/public/assets/TabletVariations/acurate_angel.png';
import Chaosform from '/public/assets/TabletVariations/Chaosform.png';
import ChaosformsN from '/public/assets/TabletVariations/ChaosformsN.png';
import ChaosformZ from '/public/assets/TabletVariations/ChaosformZ.png';
import Chibi_Zayn from '/public/assets/TabletVariations/Chibi_Zayn.png';
import DragonSummonPurple from '/public/assets/TabletVariations/DragonSummonPurple.png';
import Lost_Valley from '/public/assets/TabletVariations/Lost_Valley.png';
import OCOCOCOCOC from '/public/assets/TabletVariations/OCOCOCOCOC.png';
import Pathofdestruction from '/public/assets/TabletVariations/Pathofdestruction.png';
import Phase_2_Fire_Rune_1526 from '/public/assets/TabletVariations/Phase_2_Fire_Rune_1526.png';
import QueensHeart from '/public/assets/TabletVariations/QueensHeart.png';
import Scarlett_Neutral from '/public/assets/TabletVariations/Scarlett_Neutral.png';
import TitleV1 from '/public/assets/TabletVariations/TitleV1.png';
import Zayn_Neutral from '/public/assets/TabletVariations/Zayn_Neutral.png';

const dispaly3 = [
  acurate_angel,
  Chaosform,
  ChaosformsN,
  ChaosformZ,
  Chibi_Zayn,
  DragonSummonPurple,
  Lost_Valley,
  OCOCOCOCOC,
  Pathofdestruction,
  Phase_2_Fire_Rune_1526,
  QueensHeart,
  Scarlett_Neutral,
  TitleV1,
  Zayn_Neutral,
];

// Section4
import Battlescreen from '/public/assets/TabletWebNDesign/Battlescreen_new.png';
import battlevars from '/public/assets/TabletWebNDesign/battlevars_new.png';
import Patternwall2Low from '/public/assets/TabletWebNDesign/Patternwall2Low.png';
import PatternwallLow from '/public/assets/TabletWebNDesign/PatternwallLow.png';
import PatternwallRooms from '/public/assets/TabletWebNDesign/PatternwallRooms.png';

const dispaly4 = [
  Battlescreen,
  battlevars,
  Patternwall2Low,
  PatternwallLow,
  PatternwallRooms,
];

// Section5
// import Litterallyme from '/public/assets/Title/Litterallyme.png';
// import SlimeMonarchOrMe from '/public/assets/Title/SlimeMonarchOrMe.png';

// const dispaly5 = [Litterallyme, SlimeMonarchOrMe];

const displays = [display1, dispaly2, dispaly3, dispaly4];

const Display = ({ section }: { section: number }) => {
  const [current_pic, setPic] = useState(displays[section][0]);

  const handleNext = () => {
    console.log(displays[section].indexOf(current_pic));
    setPic(
      displays[section][
        displays[section].indexOf(current_pic) + 1 >= displays[section].length
          ? 0
          : displays[section].indexOf(current_pic) + 1
      ],
    );
  };
  const handleBack = () =>
    setPic(
      displays[section][
        displays[section].indexOf(current_pic) - 1 < 0
          ? displays[section].length - 1
          : displays[section].indexOf(current_pic) - 1
      ],
    );

  return (
    <div className={`w-[60%]  `}>
      <div className='relative w-full  pb-[100%]  '>
        <div className='absolute h-full max-h-screen w-full  '>
          <div className='absolute  h-1/2 w-1/2 translate-x-[50%] translate-y-[50%]  '>
            <Image
              src={current_pic}
              placeholder='blur'
              alt='Picture of a character I drew.'
              layout='fill'
              objectFit='contain'
              objectPosition='center center'
            />
          </div>
          <Image
            src={dispalyPic}
            alt='Picture of a mirror'
            layout='fill'
            objectFit='contain'
            objectPosition='center center'
          />

          <button
            onClick={handleNext}
            className='absolute right-[15%] top-[50%] block h-10 w-20 animate-pulse'
          >
            <Image src={arrow_blue} alt='Next' className='scale-[-1]' />
          </button>
          <button
            onClick={handleBack}
            className='absolute left-[15%] top-[50%] block h-10 w-20 animate-pulse'
          >
            <Image src={arrow_red} alt='Back' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
