import Image from 'next/image';
import tear from '../resources/TearinVoid.png';
import ParallaxWrapper from './ParallaxWrapper';

const Tear = ({ className, speed }: { className: string; speed: number }) => {
  return (
    <ParallaxWrapper
      speed={speed}
      className={`${className} absolute w-1/6 opacity-40`}
    >
      <div>
        <Image alt='sytialised display' src={tear} />
      </div>
    </ParallaxWrapper>
  );
};

export default Tear;
