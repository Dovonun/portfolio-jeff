import Image from 'next/image';
import { useState } from 'react';
import test1 from '../resources/character/test.png';
import tst from '../resources/character/tst.png';
import Cagliostro from '../resources/character/Cagliostro.png';
import dispalyPic from '../resources/display.png';

const pics = [tst, test1, Cagliostro];

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
      className={`${
        location === 'left' ? '' : 'ml-[5%]'
      } mt-[10%] w-full outline outline-red-600`}
    >
      <div className='relative pb-[100%] outline outline-violet-500'>
        <div className='absolute top-[50%] h-full max-h-screen w-full translate-y-[-50%] outline outline-green-400'>
          <div className='absolute h-1/2 w-1/2 translate-x-[50%] translate-y-[50%] outline outline-yellow-600'>
            <Image
              src={pic}
              placeholder='blur'
              alt='Picture of a character I drew.'
              layout='fill'
              objectFit='contain'
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
            className='absolute right-[20%] top-[50%] block h-10 w-20'
          >
            Next
          </button>
          <button
            onClick={handleBack}
            className='absolute left-[20%] top-[50%] block h-10 w-20'
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
