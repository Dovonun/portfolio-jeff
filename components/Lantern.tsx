import React from 'react';

import Image from 'next/image';
import lightPic from '../resources/light_pic.png';
import rootWithLantern from '/public/assets/root_with_lantern.png';

const Lantern = ({
  location = 'right',
  size = 'normal',
}: {
  location?: 'left' | 'right';
  size?: 'normal' | 'big';
}) => {
  return (
    <div
      className={`${location === 'right' ? 'right-0' : '-scale-x-100'} ${
        size === 'big' ? 'w-[30vw]' : ' w-[20vw]'
      } absolute mt-[-15vh]`}
    >
      <div className='absolute right-0 w-[130%]'>
        <div className='translate-x-[-3%] translate-y-[45%]'>
          <Image
            className='animate-flicker opacity-60'
            src={lightPic}
            alt='light'
            layout='responsive'
          />
        </div>
      </div>
      <div className='absolute w-[100%]'>
        <Image
          src={rootWithLantern}
          alt='Picture of a mirror'
          layout='responsive'
        />
      </div>
    </div>
  );
};

export default Lantern;
