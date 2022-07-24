import Display from './Display';
import TextTemplate from './TextTemplate';

// import Arrowb from './Arrowb';

const Section2 = () => {
  return (
    <div className='flex h-screen items-center justify-around'>
      <Display location='left' />
      <TextTemplate>
        <p className='mr-[15vw]'>
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
