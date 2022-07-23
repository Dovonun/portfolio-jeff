import Image from 'next/image';
import ParallaxWrapper from './ParallaxWrapper';
import tear from '/public/resources/TearinVoid.png';

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
