import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function Shop() {
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
            <span className="text-4xl font-bold">Shop</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Link href="/">Home
          </Link>
          <IoIosArrowForward />
          <Link href="/Shop/Asgaard-sofa">Shop</Link>
        </div>
      </div>

      {/* section 2 */}

      <div className="w-full bg-[#FAF4F4] mt-6">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-6">
          {/* Filter Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Image
              src="/shop img/Vector (1).png"
              alt="adjustment"
              width={25}
              height={25}
            />
            <h3 className="font-normal text-base sm:text-xl text-black">Filter</h3>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="w-7 h-7 flex items-center justify-center">
              <Image
                src="/shop img/Vector (2).png"
                alt="vector"
                width={16.36}
                height={16.36}
              />
            </div>
            <div className="w-7 h-7 flex items-center justify-center">
              <Image
                src="/shop img/Vector (3).png"
                alt="vector"
                width={21}
                height={19.5}
              />
            </div>
          </div>

          {/* Showing Results Section */}
          <div className="border-t sm:border-t-0 sm:border-l-2 border-[#9F9F9F] mt-4 sm:mt-0 sm:pl-6">
            <p className="font-normal text-sm sm:text-base text-center sm:text-left">
              Showing 1-16 of 32 results
            </p>
          </div>

          {/* Show Items Section */}
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <h5 className="font-normal text-sm sm:text-base text-black">Show</h5>
            <p className="font-normal text-sm sm:text-base text-[#9F9F9F] bg-white px-4 py-2 rounded">
              16
            </p>
          </div>

          {/* Sort By Section */}
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <span className="font-normal text-sm sm:text-base text-black">Sort by</span>
            <div className="w-[150px]">
              <p className="font-normal text-sm sm:text-base text-[#9F9F9F] bg-white px-4 py-2 rounded">
                Default
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}


      {/* Row 1 */}
      <div className="w-full h-auto flex flex-wrap justify-center items-center">
        <div className="w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            {/* Product Card */}
            {[
              {
                img: "/images/Trenton modular sofa_3 1.png",
                alt: "sofa",
                title: "Trenton modular sofa_3",
                price: "Rs. 25,000.00",
              },
              {
                img: "/images/Granite dining table with dining chair 1.png",
                alt: "dining table",
                title: "Granite dining table with dining chair",
                price: "Rs. 25,000.00",
              },
              {
                img: "/images/Outdoor bar table and stool 1.png",
                alt: "stool",
                title: "Outdoor bar table and stool",
                price: "Rs. 25,000.00",
              },
              {
                img: "/images/Plain console with teak mirror 1.png",
                alt: "mirror",
                title: "Plain console with teak mirror",
                price: "Rs. 25,000.00",
              },
            ].map((product, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[220px] h-[200px] flex justify-center items-center">
                  <Image src={product.img} alt={product.alt} width={200} height={200} />
                </div>
                <div className="flex flex-col text-center mt-4">
                  <span className="font-normal">{product.title}</span>
                  <span className="font-semibold">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Repeat Rows */}
      <div className="w-full h-auto flex flex-wrap justify-center items-center">
        <div className="w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            {[
              {
                img: "/shop img/office table 5.png",
                alt: "table",
                title: "Grain coffee table",
                price: "Rs. 15,000.00",
              },
              {
                img: "/shop img/cofee table 6.png",
                alt: "coffee table",
                title: "Kent coffee table",
                price: "Rs. 225,000.00",
              },
              {
                img: "/shop img/round table 7.png",
                alt: "round table",
                title: "Round coffee table_color 2",
                price: "Rs. 251,000.00",
              },
              {
                img: "/shop img/Reclaimed table 8.png",
                alt: "table",
                title: "Reclaimed teak coffee table",
                price: "Rs. 25,200.00",
              },
            ].map((product, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[220px] h-[200px] flex justify-center items-center">
                  <Image src={product.img} alt={product.alt} width={200} height={200} />
                </div>
                <div className="flex flex-col text-center mt-4">
                  <span className="font-normal">{product.title}</span>
                  <span className="font-semibold">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full flex items-center justify-center gap-4 mt-8">
        {["1", "2", "3", "Next"].map((item, index) => (
          <div
            key={index}
            className={`w-[60px] h-[60px] rounded-[10px] ${item === "1" ? "bg-[#FBEBB5]" : "bg-[#FFF9E5]"
              } flex justify-center items-center`}
          >
            <p className="font-normal text-xl text-black">{item}</p>
          </div>
        ))}
      </div>

      {/* section 4 */}
      
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



