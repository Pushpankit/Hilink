import Image from 'next/image'
import featuresData from '../contants/index';
import React from 'react'
import Button from './Button';

const FeaturesCard =({h1,p,src})=>{
  return(
<div className=' lg:w-[30%] m-3 rounded-lg border-2 border-slate-950'>

<Image className="h-[220px] w-full"src={src} width={900} height={100} />

<div className='px-3'>
  <h1 className='text-xl py-2'>{h1}</h1>
  <p>{p}</p>
  <Button className="my-3 px-4 py-2 bg-red-500 text-white w-50" type="button" title="Go somewhere"/>
</div>
</div>
  )}


  const Features = () => {
    return (
      <section className='flex flex-wrap justify-between m-5 lg:m-20 flow-col lg:flow-row'>
        {featuresData.map((data, index) => (
          <FeaturesCard key={index} h1={data.h1} p={data.p} src={data.src}/>
        ))}
      </section>
    );
  }

export default Features
