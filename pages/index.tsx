import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from '../components/Home';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import lightPic from '../public/resources/light.png';
import rootPic from '../public/resources/rootintootin.png';

const IndexPage = () => (
  <ParallaxProvider>
    <div className='overflow-hidden bg-gradient-to-b from-[#301548] to-black text-white'>
      <Home />
      <Section2 />
      <div>
        <div className='absolute left-[5vw] mt-[18vh] mr-[5vw] opacity-60'>
          <div className='w-[15vw]'>
            <Image src={lightPic} alt='light' layout='responsive' />
          </div>
        </div>
        <div className='absolute left-[-8vw] mt-[-15vh] w-[30vw] -scale-x-100'>
          <Image src={rootPic} alt='Picture of a mirror' layout='responsive' />
        </div>
      </div>
      <Section3 />
      <div>
        <div className='absolute right-0 mt-[18vh] mr-[5vw] opacity-50'>
          <div className='w-[15vw]'>
            <Image src={lightPic} alt='light' layout='responsive' />
          </div>
        </div>
        <div className='absolute right-0 mt-[-15vh] w-[22vw] overflow-hidden'>
          <div className='w-[30vw]'>
            <Image
              src={rootPic}
              alt='Picture of a mirror'
              layout='responsive'
            />
          </div>
        </div>
      </div>
      <Section4 />
      <Section5 />
      <div>
        <div className='absolute left-[-4vw] mt-[10vh] h-[90vh] overflow-hidden opacity-40'>
          <div className='w-[50vw]'>
            <Image src={lightPic} alt='light' layout='responsive' />
          </div>
        </div>
        <div className='absolute left-[-13vw] mt-[-15vh] w-[50vw] -scale-x-100'>
          <Image src={rootPic} alt='Picture of a mirror' layout='responsive' />
        </div>
      </div>
      <Section6 />
    </div>
  </ParallaxProvider>
);

export default IndexPage;
