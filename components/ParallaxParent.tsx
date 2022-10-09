import React from 'react';
import ParallaxWrapper from './ParallaxWrapper';

const ParallaxParent = () => {
  const tears = [
    { top: 'top-[100vh]', left: 'left-[70vw]', speed: -30, type: 'tear' },
    { top: 'top-[15vh]', left: 'left-[2vw]', speed: -50, type: 'tear' },
    { top: 'top-[220vh]', left: 'left-[0vw]', speed: -55, type: 'tear' },
    { top: 'top-[200vh]', left: 'left-[80vw]', speed: -40, type: 'tear' },
    { top: 'top-[300vh]', left: 'left-[80vw]', speed: -80, type: 'tear' },
    { top: 'top-[100vh]', left: 'left-[50vw]', speed: -150, type: 'rootV' },
    { top: 'top-[350vh]', left: 'left-[40vw]', speed: -150, type: 'rootH' },
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
