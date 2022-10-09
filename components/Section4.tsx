import Display from './Display';
import TextTemplate from './TextTemplate';

// import Arrowb from './Arrowb';

const Section2 = () => {
  return (
    <div className='flex h-screen items-center justify-around'>
      <Display location='left' />
      <TextTemplate>
        <p className='mr-[15vw]'>
          In addition to designing official sprites, I also draw various
          different things in multiple styles not only for my own enjoyment, but
          also to expand my skill set for future additions to my Story or other
          projects.
        </p>
      </TextTemplate>
    </div>
  );
};

export default Section2;
