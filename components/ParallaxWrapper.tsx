import { useParallax } from 'react-scroll-parallax';

const ParallaxWrapper = (props: {
  speed: number;
  className: string;
  children: JSX.Element[] | JSX.Element;
}) => {
  const { ref } = useParallax<HTMLDivElement>({ speed: props.speed });

  return (
    <div ref={ref} className={props.className}>
      {props.children}
    </div>
  );
};

export default ParallaxWrapper;
