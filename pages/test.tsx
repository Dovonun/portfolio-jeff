import Image from 'next/image';
import pic from '../resources/character/tst.png';

const IndexPage = () => (
  <div className='flex h-screen flex-wrap'>
    {/* intrinsic Image*/}
    <div className='relative h-1/4 w-1/4'>
      <div className='relative top-[50%] h-[100px] w-[100px] translate-y-[-50%] bg-black'></div>
    </div>
    <div className='w-1/2 bg-blue-500'>
      <div className='relative w-4/5 bg-red-900 pb-[100%]'>
        <div className='absolute h-full max-h-screen w-full'>
          <Image
            alt='test'
            src={pic}
            layout='fill'
            objectFit='contain'
            objectPosition='left top'
            // className='translate-x-[-5%]'
          />
          <div
            className='absolute top-[15%] h-1/2  w-full outline outline-yellow-400'
            style={{
              color: 'blue',
              marginLeft: 'calc(1vh * 1vw)',
            }}
          >
            <Image
              alt='test'
              src={pic}
              layout='fill'
              objectFit='contain'
              objectPosition='left top'
            />
          </div>
        </div>
      </div>
    </div>
    {/* fixed Image*/}
    <div>
      <div className='max-w-[5vw] bg-red-900 pb-[50%]'>
        <div className='relative h-1/2 w-1/2 overflow-hidden outline outline-4 outline-lime-500'>
          <div className='absolute h-full w-1/2 outline outline-4 outline-offset-[-5px]'>
            <Image alt='test' src={pic} layout='fixed' />
          </div>
          <div className='absolute h-1/2 w-1/4 overflow-hidden outline outline-red-900'>
            <Image src={pic} alt='test' layout='fixed' />
          </div>
        </div>
      </div>
    </div>
    {/* responsive Image*/}
    <div className='relative h-1/2 w-1/2 overflow-hidden outline outline-4 outline-lime-500'>
      <div className='absolute h-full w-1/2 outline outline-4 outline-offset-[-5px]'>
        <Image alt='test' src={pic} layout='responsive' />
      </div>
      <div className='absolute h-1/2 w-1/4 overflow-hidden outline outline-red-900'>
        <Image src={pic} alt='test' layout='responsive' />
      </div>
    </div>
    {/* fill Image*/}
    <div className='relative h-1/2 w-1/2 overflow-hidden outline outline-4 outline-lime-500'>
      <div className='absolute pb-[50%] outline outline-4 outline-offset-[-5px]'>
        <Image alt='test' src={pic} layout='fill' />
        <div className='absolute h-1/2 w-1/2 overflow-hidden outline outline-red-900'>
          <Image src={pic} alt='test' layout='fill' />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
