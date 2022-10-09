import Display from './Display';
import TextTemplate from './TextTemplate';

// import Arrowb from './Arrowb';

const Section2 = () => {
  return (
    <div className='flex h-screen items-center justify-around'>
      <Display location='left' />
      <TextTemplate>
        <p>
          I am currently working on my passion project: <br /> - A Visual Novel.
        </p>
        <p>
          Naturally this not only includes writing a story but also creating
          characters for it. I draw everything from Visual looks and Reaction
          Variants to designing and writing their Origin, Lore, Abilities and
          place in the World I&rsquo;m creating.
        </p>
      </TextTemplate>
    </div>
  );
};

export default Section2;
