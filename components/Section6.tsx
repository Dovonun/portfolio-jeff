import TextTemplate from './TextTemplate';
import Lantern from './Lantern';
// import Arrowb from './Arrowb';

const Section2 = () => {
  return (
    <div className='relative h-screen'>
      <Lantern location='left' size='big' />
      <TextTemplate className='absolute ml-[50vw] mt-[25vh]'>
        <p>Welcome to the bottom of my ability list.</p>
        <p>
          The current focus of expanding my skills lies in creating backgrounds
          and scenes for my project and learning animation.
        </p>
        <p>Some future skills include music design and creating an ost.</p>
      </TextTemplate>
    </div>
  );
};

export default Section2;
