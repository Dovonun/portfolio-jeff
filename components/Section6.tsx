import TextTemplate from './TextTemplate';
import Lantern from './Lantern';
// import Arrowb from './Arrowb';

const Section2 = () => {
  return (
    <div className='relative h-screen'>
      <Lantern location='left' size='big' />
      <TextTemplate className='absolute ml-[50vw] mt-[25vh]'>
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
