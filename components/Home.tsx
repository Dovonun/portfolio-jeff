import Image from 'next/image';
import mirrorPic from '../resources/mirrory.png';
// import Arrowb from './Arrowb';

const Home = () => {
  return (
    <div className='flex h-screen items-center justify-around'>
      <div className='flex h-1/2 w-1/3 flex-col '>
        <div className='h-1/3'>
          <h1 className='text-8xl'>Welcome</h1>
          <h2 className='mt-16 ml-32 text-4xl'>
            - to the depth of my abilities
          </h2>
        </div>
        <div className='ml-32 flex h-2/3 flex-col justify-evenly text-3xl'>
          <p>
            This is me. <br /> I go by Jeffrey Sprenger Aka: Zano_Scro.
          </p>
        </div>
      </div>
      <div className='relative h-[90%] w-[35%]'>
        <Image
          src={mirrorPic}
          alt='Picture of a mirror'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  );
};

export default Home;
