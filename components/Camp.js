import Image from 'next/image';
import React from 'react';
import Button from './Button';

const CampSite = ({ src, width, height, imagePosition }) => {
  const renderImage = () => {
    return (
      <div className='w-full lg:w-2/4'>
        <Image className="h-[300px] lg:h-full" src={src} width={width} height={height} />
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className='w-full lg:w-[50%] p-10 camp-content'>
        <h1 className='text-2xl font-bold'>I am here</h1>
        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, mollitia.</p>
        <Button className="px-4 my-6 py-2 bg-red-500 text-white w-50" type="button" title="Find Fights" />
      </div>
    );
  };

  return (
    <div>
      {imagePosition === 'left' && (
        <div className='flex flex-col justify-between m-5 lg:flex-row rounded-lg border-2 border-slate-950'>
          {renderImage()}
          {renderContent()}
        </div>
      )}
      {imagePosition === 'right' && (
        <div className='flex flex-col-reverse justify-between m-5 lg:flex-row rounded-lg border-2 border-slate-950'>
          {renderContent()}
          {renderImage()}
        </div>
      )}
    </div>
  );
}

const Camp = () => {
  return (
    <section>
        <CampSite src="/img-1.png" height={1000} width={1000} imagePosition="right" />
      <CampSite src="/img-2.png" height={1000} width={1000} imagePosition="left" />
      
    </section>
  );
}

export default Camp;

