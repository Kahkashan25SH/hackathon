import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward, IoIosPerson } from "react-icons/io";
import { FaCalendar, FaTag } from "react-icons/fa";

export default function Blog() {
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/shop img/Rectangle 1.png')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/shop img/Meubel House_Logos-05.png"
              alt="logo"
              width={77}
              height={77}
              className="mb-2"
            />
            <span className="text-4xl font-bold">Blog</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Link href="#">Home</Link>
          <IoIosArrowForward />
          <Link href="#">Blog</Link>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-wrap gap-8">
          {/* Blog Cards */}
          {[1, 2, 3].map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[48%] lg:w-[31%] bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/Blog-${card}.png`}
                alt={`Blog-${card}`}
                width={817}
                height={500}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm gap-4 mb-4">
                  <span className="flex items-center gap-1">
                    <IoIosPerson /> Admin
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendar /> 14 Oct 2022
                  </span>
                  <span className="flex items-center gap-1">
                    <FaTag /> {card === 2 ? 'Handmade' : 'Wood'}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">
                  {card === 1
                    ? 'Going all-in with millennial design'
                    : card === 2
                    ? 'Exploring new ways of decorating'
                    : 'Handmade pieces that took time to make'}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
                  ultricies leo integer malesuada nunc.
                </p>
                <Link
                  href="#"
                  className="text-black border-b-2 border-black pb-1 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="mt-16">
          <div className="mb-12">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow outline-none text-gray-700"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1111 5a6 6 0 016 6z"
                />
              </svg>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-semibold mb-6">Category</h2>
            <div className="space-y-4 text-gray-700">
              {['Craft', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>{category}</span>
                  <span>{Math.floor(Math.random() * 10)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-lg font-semibold mb-6">Recent Posts</h2>
            {['Blog-4', 'Blog-5', 'Blog-6', 'Blog-7', 'Blog-8'].map((recent, idx) => (
              <div key={idx} className="flex items-center gap-4 mb-6">
                <Image
                  src={`/images/${recent}.png`}
                  alt={recent}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-base font-medium">
                    {recent === 'Blog-4'
                      ? 'Going all-in with millennial design'
                      : recent === 'Blog-5'
                      ? 'Exploring new ways of decorating'
                      : 'Handmade pieces that took time to make'}
                  </h3>
                  <p className="text-sm text-gray-500">03 Aug 2022</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                page === 1 ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium">
            Next
          </button>
        </div>
      </div>

      {/* section 2 */}

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
  );
}



