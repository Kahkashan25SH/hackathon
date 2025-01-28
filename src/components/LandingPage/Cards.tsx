import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Cards() {
    return (
        <div>
            <div className='w-full flex justify-center items-center mt-16 px-4'>
                <div className='w-full max-w-6xl'>
                    {/* Top Side */}
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold pb-5'>Top Picks For You</h2>
                        <p className='mt-5 text-[#9F9F9F] sm:text-sm md:text-base'>
                            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                        </p>
                    </div>

                    {/* Products Boxes */}
                    <div className='flex flex-wrap justify-center gap-8 my-12'>
                        <div className='flex flex-col items-center w-48'>
                            <div className='w-full h-48 flex justify-center items-center bg-gray-100 rounded-lg'>
                                <Image src="/images/Trenton modular sofa_3 1.png" alt="dining table" width={200} height={200} />
                            </div>
                            <span className='font-normal mt-4'>Trenton modular sofa_3</span>
                            <span className='font-semibold'>Rs. 25,000.00</span>
                        </div>

                        <div className='flex flex-col items-center w-48'>
                            <div className='w-full h-48 flex justify-center items-center bg-gray-100 rounded-lg'>
                                <Image src="/images/Granite dining table with dining chair 1.png" alt="dining table" width={200} height={200} />
                            </div>
                            <span className='font-normal mt-4 text-center'>Granite dining table with dining chair</span>
                            <span className='font-semibold'>Rs. 25,000.00</span>
                        </div>

                        <div className='flex flex-col items-center w-48'>
                            <div className='w-full h-48 flex justify-center items-center bg-gray-100 rounded-lg'>
                                <Image src="/images/Outdoor bar table and stool 1.png" alt="Outdoor bar table" width={200} height={200} />
                            </div>
                            <span className='font-normal mt-4 text-center'>Outdoor bar table and stool</span>
                            <span className='font-semibold'>Rs. 25,000.00</span>
                        </div>

                        <div className='flex flex-col items-center w-48'>
                            <div className='w-full h-48 flex justify-center items-center bg-gray-100 rounded-lg'>
                                <Image src="/images/Plain console with teak mirror 1.png" alt="Console with teak mirror" width={200} height={200} />
                            </div>
                            <span className='font-normal mt-4 text-center'>Plain console with teak mirror</span>
                            <span className='font-semibold'>Rs. 25,000.00</span>
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='inline-flex text-black py-2 border-b border-black text-lg transition-all hover:text-gray-600'>
                            View More
                        </button>
                    </div>
                </div>
            </div>

            {/* Lounge Area */}
            <section className='bg-yellow-100 my-32 px-4'>
                <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:py-24'>
                    <div className='lg:w-1/2 w-full flex justify-center'>
                        <Image src="/images/Asgaard sofa 1.png" alt="Asgaard sofa" width={500} height={500} className='rounded-lg' />
                    </div>

                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left px-4'>
                        <h5 className='font-medium'>New Arrivals</h5>
                        <h1 className='text-3xl sm:text-5xl font-bold text-gray-900 mb-6'>Asgaard sofa</h1>
                        <button className='inline-flex text-black hover:bg-slate-200 py-2 px-6 border border-black transition-all duration-200'>
                            <Link href="/Shop/Asgaard-sofa">Order Now</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}




