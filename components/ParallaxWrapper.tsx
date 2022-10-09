import Image from 'next/image';
import tear from '../resources/TearinVoid.png';
import rootH from '../resources/RootsH.png';
import rootV from '../resources/RootsV.png';
import { useParallax } from 'react-scroll-parallax';

const nameMap = new Map([
  ['tear', tear],
  ['rootH', rootH],
  ['rootV', rootV],
]);

const ParallaxWrapper = ({
  elem,
}: {
  elem: { top: string; left: string; speed: number; type: string };
}): JSX.Element => {
  const { ref } = useParallax<HTMLDivElement>({ speed: elem.speed });

  return (
    <div
      ref={ref}
      className={`${elem.top} ${elem.left} absolute w-1/6 opacity-40`}
    >
      <Image src={nameMap.get(elem.type) ?? ''} alt={elem.type} />
    </div>
  );
};

export default ParallaxWrapper;
