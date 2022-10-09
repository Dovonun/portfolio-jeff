import Display from './Display';
import TextTemplate from './TextTemplate';

// import Arrowb from './Arrowb';

const Section2 = () => {
  return (
    <div className='flex h-screen items-center justify-around'>
      <TextTemplate>
        <p>
          Lastly, I would like to mention that my Visual Novel will be hosted on
          a website. Thus my skills also include web design and experience with
          tools like: <br /> - Figma.
        </p>
        <p>
          I have been drawing digitally with “Clip studio Paint” for a good span
          of about 3 years now and know the program fairly well. I&rsquo;m also
          familiar with Photoshop though I mostly use my comfort tool for my
          work.
        </p>
      </TextTemplate>
      <Display location='right' />
    </div>
  );
};

export default Section2;
