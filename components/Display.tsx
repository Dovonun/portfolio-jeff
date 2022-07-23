import Image from 'next/image';
import { useState } from 'react';
import test1 from '/public/resources/character/test1.png';
import tst from '/public/resources/character/tst.png';
import dispalyPic from '/public/resources/display.png';

const pics = [tst, test1];

const Display = ({ location = 'right' }: { location?: 'left' | 'right' }) => {
  const [pic, setPic] = useState(tst);

  const handleNext = () => {
    console.log(pics.indexOf(pic));
    setPic(
      pics[pics.indexOf(pic) + 1 >= pics.length ? 0 : pics.indexOf(pic) + 1],
    );
  };
  const handleBack = () =>
    setPic(
      pics[pics.indexOf(pic) - 1 < 0 ? pics.length - 1 : pics.indexOf(pic) - 1],
    );

  return (
    <div
      className={`${location === 'left' ? '' : 'ml-[-10%]'} relative w-1/3 `}
    >
      <div className={` absolute left-[-5%] top-0 mt-[-74%] w-[120%]`}>
        <Image src={pic} alt='Picture of a character I drew.' />
      </div>

      <div className={` absolute left-[15%] top-0 mt-[-115%] w-[100%]`}>
        <div className='ml-[-65%] w-[220%]'>
          <Image
            src={dispalyPic}
            alt='Picture of a mirror'
            layout='responsive'
          />
        </div>
      </div>
      <button
        onClick={handleNext}
        className='absolute left-[100%] block h-10 w-20'
      >
        Next
      </button>
      <button
        onClick={handleBack}
        className='absolute left-[8%] block h-10 w-20'
      >
        Back
      </button>
    </div>
  );
};

export default Display;
