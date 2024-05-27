import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flex flex-col items-center px-5 lg:px-20">
      <div className="w-full max-w-screen-xl pb-24 py-3">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase text-base -mt-1 mb-3">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-2xl lg:text-4xl font-bold xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="text-base lg:text-lg text-gray-500 xl:max-w-[550px]">
            Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives, and friends to have fun in the wilderness through the valley and reach the top of the mountain.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-screen-xl rounded-3xl border">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full h-auto object-cover object-center 2xl:rounded-5xl"
        />

<div className="absolute flex flex-row bg-white py-4 px-4 sm:py-6 sm:px-5 lg:py-8 lg:px-7 gap-3 rounded-3xl border shadow-md left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-[5%] lg:top-10 top-2 min-h-0 w-[90%] sm:w-auto lg:w-[300px]">
  <Image 
    src="/meter.svg"
    alt="meter"
    width={16}
    height={158}
    className="w-4 sm:w-8 lg:w-auto h-full"
  />
  <div className="flex flex-col justify-between">
    <div className="flex flex-col mb-4 lg:mb-0">
      <div className="flex justify-between w-full">
        <p className="text-xs sm:text-sm lg:text-base text-gray-400">Destination</p>
        <p className="font-bold text-xs sm:text-sm lg:text-base text-green-500">48 min</p>
      </div>
      <p className="font-bold text-sm sm:text-lg lg:text-xl mt-2">Aguas Calientes</p>
    </div>

    <div className="flex flex-col">
      <p className="text-xs sm:text-sm lg:text-base text-gray-400">Start track</p>
      <h4 className="font-bold text-sm sm:text-lg lg:text-xl mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
    </div>
  </div>
</div>

      </div>
    </section>
  )
}

export default Guide
