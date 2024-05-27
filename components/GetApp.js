import React from 'react';
import Button from './Button';
import Image from 'next/image';

const GetApp = () => {
  return (
    <section className="flex justify-center items-center flex-col pb-20 xl:pb-0">
      <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-24 px-6 xl:px-0">
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 xl:max-w-[320px]">Get it for free now!</h2>
          <p className="text-base lg:text-lg text-gray-500 mb-6">Available on iOS and Android</p>
          <div className="flex flex-col lg:flex-row gap-4 xl:gap-8">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              width={25}
               height={50}
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              width={25}
               height={50}
              variant="btn_white"
              full
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end flex-1 mt-12 lg:mt-0">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
}

export default GetApp;
