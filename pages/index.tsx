import { ParallaxProvider } from 'react-scroll-parallax';
import Home from '../components/Home';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Lantern from '../components/Lantern';

const IndexPage = () => (
  <ParallaxProvider>
    <div className='overflow-hidden bg-gradient-to-b from-[#301548] to-black text-white'>
      <Home />
      <Section2 />
      <Lantern location='left' />
      <Section3 />
      <Lantern />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  </ParallaxProvider>
);

export default IndexPage;
