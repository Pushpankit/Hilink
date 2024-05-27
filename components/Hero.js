import Image from 'next/image';
import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <>
      <section className="max-container px-10 lg:flex">
        <div className="relative flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-2/5 my-10">
            <Image src="/camp.svg" alt="camp" width={50} height={100} />
            <h1 className="text-6xl font-bold">Fly across the World</h1>
            <p className="py-6 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel alias earum praesentium recusandae! Non, officiis. Incidunt ex minus deleniti vero.</p>
            <div className="my-10 flex flex-wrap gap-1">
              <div className="flex gap-2 mx-4">
                {Array(5).fill(1).map((_, index) => (
                  <Image 
                    src="/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
              <span className="font-bold">200k</span>
              <span>Rating</span>
            </div>
            <div className="flex gap-7 flex-col lg:flex-row items-center">
              <Button className="px-4 py-2 rounded-full bg-lime-500 text-white w-50" type="button" title="Download Now" />
              <Button className="flex px-4 py-2" icon="/play.svg" type="button" title="How we work?" width={25} height={50} />
            </div>
          </div>
          <div className="hidden lg:block lg:w-2/5 right-20">
            <Image className="" src="/hero.png" alt="hero" width={1500} height={1500} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
