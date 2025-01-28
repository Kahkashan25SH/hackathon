import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

export default function Contact() {
  return (
    <div>
      <div className="relative w-full h-[316px] bg-cover bg-center" style={{ backgroundImage: "url('/shop img/Rectangle 1.png')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/shop img/Meubel House_Logos-05.png"
              alt="logo"
              width={77}
              height={77}
              className="mb-2"
            />
            <span className="text-4xl font-bold">Contact</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Link href="#">Home
          </Link>
          <IoIosArrowForward />
          <Link href="#">Contact</Link>
        </div>
      </div>

      {/* section 2 */}
      <div>
        <span className='flex justify-center text-4xl pb-5 mt-20 font-bold'>Get In Touch With Us</span>
        <div className="flex items-center justify-center text-center">
          <h3 className='mt-5 text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!.</h3>
        </div>
      </div>

      <div className="w-full md:px-8 lg:px-16 my-12 py-12  ">
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Left Section */}
          <div className="flex-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Address Column */}
            <div className="flex space-x-8 p-8 rounded-lg">
              <FaMapMarkerAlt className="text-4xl" />
              <h3 className="text-xl font-bold mb-2">Address
                <p className="text-[#9F9F9F] text-sm">
                  236 5th SE Avenue New <br />York NY10000 United <br />States
                </p></h3>
            </div>

            {/* Phone Column */}
            <div className="flex space-x-8  p-8 rounded-lg">
              <FaPhoneAlt className="text-4xl" />
              <h3 className="text-xl font-bold mb-2">Phone
                <p className="text-[#9F9F9F] text-sm">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p></h3>
            </div>

            {/* Working Time Column */}
            <div className="flex space-x-8 p-8 rounded-lg ">
              <FaClock className="text-4xl" />
              <h3 className="text-xl font-bold mb-2">Working Time
                <p className="text-[#9F9F9F] text-sm">
                  Monday-Friday: 9:00-22:00 <br />
                  Saturday-Sunday: 9:00-21:00
                </p></h3>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-red-40 p-8 rounded-lg">

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-black">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full border border-[#9F9F9F] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-base font-medium text-black">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full border border-[#9F9F9F] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-base font-medium text-black">
                  Subject
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="This is an optional"
                  className="w-full border border-[#9F9F9F] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-base font-medium text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! id like to ask about"
                  className="w-full border border-[#9F9F9F] rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
                  rows={3} />

              </div>
              <button
                type="submit"
                className="px-14 py-2 border border-black text-black rounded-[15px] hover:bg-gray-100 transition font-normal text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-auto bg-[#FAF4F4] mt-12 p-6 gap-8">
        {/* Card 1 */}
        <div className="w-full lg:w-[376px] h-auto text-center lg:text-left">
          <h5 className="font-medium text-3xl mb-2">Free Delivery</h5>
          <p className="font-normal text-xl text-[#9F9F9F]">
            For all orders over $50, consectetur <br className="hidden lg:block" /> adipiscing elit.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-[376px] h-auto text-center lg:text-left">
          <h5 className="font-medium text-3xl mb-2">90 Days Return</h5>
          <p className="font-normal text-xl text-[#9F9F9F]">
            If goods have problems, consectetur <br className="hidden lg:block" /> adipiscing elit.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full lg:w-[376px] h-auto text-center lg:text-left">
          <h5 className="font-medium text-3xl mb-2">Secure Payment</h5>
          <p className="font-normal text-xl text-[#9F9F9F]">
            100% secure payment, consectetur <br className="hidden lg:block" /> adipiscing elit.
          </p>
        </div>
      </div>

    </div>
  )
}



