import Display from './Display';
import TextTemplate from './TextTemplate';

// import Arrowb from './Arrowb';

const Section3 = () => {
  return (
    <div className='flex h-screen items-center justify-evenly'>
      <TextTemplate>
        <p className='ml-32 mt-32'>
          Since I&rsquo;m also including various different gameplay elements
          into my Visual Novel, my skills also expand to Icon and Item design,
          as well as creating complex gameplay mechanics.
        </p>
      </TextTemplate>
      <Display section={1} />
    </div>
  );
};

export default Section3;
