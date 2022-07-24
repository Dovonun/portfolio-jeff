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
        <div className='ml-32 flex h-2/3 flex-col justify-evenly text-lg'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            magni consectetur enim id pariatur beatae dignissimos quaerat eos
            eaque modi sed reiciendis suscipit, illo eligendi sint ex odit. Eum,
            mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
            natus pariatur beatae eveniet distinctio cumque accusamus similique
            cupiditate corrupti quibusdam, velit nam architecto, quod
            repellendus ad consectetur mollitia aliquid.
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
