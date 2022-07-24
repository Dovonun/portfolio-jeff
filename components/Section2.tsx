import Display from './Display';
import Tear from './Tear';
import TextTemplate from './TextTemplate';

// import Arrowb from './Arrowb';

const Section2 = () => {
  const tears = [
    { left: 'ml-[-80vw]', top: 'mt-[-40vh]', speed: -40 },
    // { left: 'ml-[-70vw]', top: 'mt-[10vh]', speed: -20 },
    { left: 'ml-[20vw]', top: 'mt-[-100vh]', speed: -30 },
    { left: 'ml-[82vw]', top: 'mt-[-15vh]', speed: -25 },
    { left: 'ml-[60vw]', top: 'mt-[120vh]', speed: -40 },
  ];

  return (
    <div className='flex h-screen items-center justify-around'>
      {tears.map((tear, index) => (
        <Tear
          key={index}
          className={`${tear.left} ${tear.top}`}
          speed={tear.speed}
        />
      ))}
      <Display location='left' />
      <TextTemplate>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          magni consectetur enim id pariatur beatae dignissimos quaerat eos
          eaque modi sed reiciendis suscipit, illo eligendi sint ex odit. Eum,
          mollitia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
          natus pariatur beatae eveniet distinctio cumque accusamus similique
          cupiditate corrupti quibusdam, velit nam architecto, quod repellendus
          ad consectetur mollitia aliquid.
        </p>
      </TextTemplate>
    </div>
  );
};

export default Section2;
