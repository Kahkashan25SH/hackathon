import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FaRegClock } from 'react-icons/fa'

export default function OurBlog() {
    return (
        <div>

            <div>
                <span className='flex justify-center text-4xl pb-5 font-bold'>Our Blogs</span>
                <div className="flex justify-center">
                    <h3 className='mt-5 text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection.</h3>
                </div>
            </div>
            <section className="text-gray-400  body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap sm:grid-flow-row-dense md:flex-wrap-reverse sm:justify-center sm:mx-20 -m-4">

                        {/* section 1 */}
                        <div className="p-4 lg:w-1/3 ">
                            <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image src="/images/Rectangle 13.png"
                                    alt="tea"
                                    width={300}
                                    height={300} />
                                <p className="leading-relaxed mb-3 text-black">Going all-in with millennial design</p>
                                <a className="text-black inline-flex items-center border-b-2 border-black font-medium">Read More
                                </a>

                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-14 gap-4">
                                    <span className="text-black inline-flex items-center leading-none text-base">

                                        <FaRegClock /> 5 min
                                    </span>
                                    <span className="text-black inline-flex items-center leading-none text-base">
                                        <CiCalendar /> 12th Oct 2022
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* section 2 */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image src="/images/Rectangle 14.png" alt="laptop"
                                    width={300} height={300} />


                                <p className="leading-relaxed mb-3 text-black">Going all-in with millennial design</p>
                                <a className="text-black inline-flex items-center border-b-2 border-black font-medium">Read More
                                </a>

                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-14 gap-4">
                                    <span className="text-black inline-flex items-center leading-none text-base">

                                        <FaRegClock /> 5 min
                                    </span>
                                    <span className="text-black inline-flex items-center leading-none text-base">
                                        <CiCalendar /> 12th Oct 2022
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* section 3 */}
                        <div className="p-4 lg:w-1/3">
                            <div className="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <Image src="/images/Rectangle 15.png" alt="laptop"
                                    width={300} height={300} />


                                <p className="leading-relaxed mb-3 text-black">Going all-in with millennial design</p>
                                <a className="text-black inline-flex items-center border-b-2 border-black font-medium">Read More
                                </a>

                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-14 gap-4">
                                    <span className="text-black inline-flex items-center leading-none text-base">

                                        <FaRegClock /> 5 min
                                    </span>
                                    <span className="text-black inline-flex items-center leading-none text-base">
                                        <CiCalendar /> 12th Oct 2022
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="flex items-center justify-center">
                        <button className="inline-flex text-black py-2 focus:outline-none text-lg ">
                            <Link href="/Contact/Categories">View More</Link>
                        </button>
                    </div>
                </div>
            </section>

            <section className="text-slate-900 ">
                <div className='bg-cover bg-center h-96'
                    style={{ background: 'url(/images/Bg.png)' }}>
                    <div className='py-32'>
                        <span className='flex justify-center text-4xl font-bold'>Our Instagram</span>
                        <div className="flex justify-center">
                            <h3 className='mt-5 text-black'>Follow our store on Instagram.
                            </h3 >
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="inline-flex text-black py-2 focus:outline-none text-lg ">
                                Follow Us
                            </button>
                        </div>


                    </div>

                </div>

            </section>
        </div>


    )
}





