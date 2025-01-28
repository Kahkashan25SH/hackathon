import Image from 'next/image';
import React from 'react';

export default function Section() {
  return (
    <div>
      <section className="text-slate-900 body-font bg-[#FBEBB5]">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-10 px-5 py-5 lg:py-24 items-center">
          {/* Left Content */}
          <div className="lg:flex-grow lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="title-font text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
              Rocket Single <br /> Seater
            </h1>
            <div className="flex justify-center lg:justify-start">
              <button className="inline-flex font-semibold text-lg text-black py-2 border-b border-black transition-all duration-200 hover:text-gray-700">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <Image 
              src="/images/Rocket single seater 1.png" 
              alt="Rocket Single Seater" 
              width={500} 
              height={400} 
              className="w-full max-w-md lg:max-w-lg h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FAFAFA] p-5 md:p-10">
        {/* Text Section with Image */}
        <div className="relative flex flex-col items-center">
          <Image
            src="/images/Granite square side table 1.png"
            alt="Granite Square Side Table"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
            width={400}
            height={300}
          />
          <p className="absolute bottom-16 text-2xl sm:text-3xl md:text-4xl font-medium text-black">
            Side Table
          </p>
          <button className="absolute bottom-4 text-black text-lg border-b border-black hover:text-gray-600 transition-all">
            View More
          </button>
        </div>

        {/* Image Section with Text */}
        <div className="relative flex flex-col items-center">
          <Image
            src="/images/Cloud sofa three seater + ottoman_3 1.png"
            alt="Cloud Sofa Three Seater"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg"
            width={400}
            height={300}
          />
          <p className="absolute bottom-16 text-2xl sm:text-3xl md:text-4xl font-medium text-black">
            Cloud Sofa
          </p>
          <button className="absolute bottom-4 text-black text-lg border-b border-black hover:text-gray-600 transition-all">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}


