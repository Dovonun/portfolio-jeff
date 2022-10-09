import React from 'react';
import ParallaxWrapper from './ParallaxWrapper';

const ParallaxParent = () => {
  const tears = [
    { top: 'top-[0vh]', left: 'left-[70vw]', speed: -100, type: 'tear' },
    { top: 'top-[1vh]', left: 'left-[0vw]', speed: -100, type: 'rootH' },
    { top: 'top-[15vh]', left: 'left-[2vw]', speed: -100, type: 'tear' },
    { top: 'top-[20vh]', left: 'left-[0vw]', speed: -100, type: 'tear' },
    { top: 'top-[40vh]', left: 'left-[80vw]', speed: -100, type: 'tear' },
    { top: 'top-[40vh]', left: 'left-[80vw]', speed: -100, type: 'rootV' },
    { top: 'top-[40vh]', left: 'left-[80vw]', speed: -100, type: 'tear' },
  ];

  return (
    <div>
      {tears.map((elem, index) => (
        <ParallaxWrapper key={index} elem={elem} />
      ))}
    </div>
  );
};

export default ParallaxParent;
