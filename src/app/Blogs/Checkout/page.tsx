import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

export default function Checkout() {
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
            <span className="text-4xl font-bold">Checkout</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Link href="#">Home
          </Link>
          <IoIosArrowForward />
        <Link href="#">Checkout</Link>
        </div>
      </div>

      {/* section 2 */}

    <div className="min-h-screen flex justify-center py-10 px-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row p-6">
        {/* Billing Details Section */}
        <div className="lg:w-2/3 pr-0 lg:pr-8 ">
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form>
            {/* First & Last Name */}
            <div className="flex flex-col lg:flex-row mb-4">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block text-black mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-[250px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block text-black mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-[250px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label htmlFor="company" className="block text-black mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="w-[600px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Country / Region */}
            <div className="mb-4 text-gray-500">
              <label htmlFor="country" className="block text-black mb-2">
                Country / Region
              </label>
              <select
                id="country"
                className="w-[600px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 "
                >
                
                <option>Sri Lanka</option>
                <option>India</option>
                <option>Pakistan</option>
              </select>
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-black mb-2">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                className="w-[600px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Town / City */}
            <div className="mb-4">
                <label htmlFor="city" className="block text-black mb-2">
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-[600px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
                />
              </div>
              {/* Province */}
              <div className="w-full text-gray-600 mb-4">
                <label htmlFor="province" className="block text-black mb-2 ">
                  Province
                </label>
                <select
                  id="province"
                  className="w-[600px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
                >
                  <option>Western Province</option>
                  <option>Southern Province</option>
                </select>
              </div>
            {/* </div> */}

            {/* ZIP Code */}
            <div className="mb-4">
              <label htmlFor="zip" className="block text-black mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                className="w-[600px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-black mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-[600px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-[600px] h-[60px] border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Additional Info */}
            <div className="mt-12">
              <input
                type="add"
                id="add"
                placeholder='Additional Information'
                className="w-[600px] h-[60px] px-6 border border-[#9F9F9F] rounded-lg p-2 focus:ring-2 focus:ring-gray-800"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 p-6 lg:border-t-0 lg:border-l ">
          <h2 className="flex items-center justify-between text-2xl font-bold mb-6">product
            <p>subttotal </p>
          </h2>
          <div className="flex justify-between mb-4">
            <span className='text-[#9F9F9F]'>Asgard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-base font-normal mb-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-base font-normal mb-8 border-b-2 pb-6">
            <span>Total</span>
            <span className="text-[#B88E2F] font-bold ">Rs. 250,000.00</span>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                className="mr-2"
                defaultChecked
              />
              Direct Bank Transfer
            </label>
            <p className="text-[#9F9F9F] font-light text-sm mb-4">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference.
            </p>

            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
          </div>

          {/* Place Order Button */}
          <button className="w-full border border-black py-3 rounded-[14px] hover:bg-gray-100 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>


    <div className=' flex items-center justify-center w-full h-[300px] space-x-3 bg-[#FAF4F4] mt-6'>
        <div className='w-[376px] h-[108px]'>
          <h5 className='w-[205px] h-[48px] font-medium text-3xl'>Free Delivery</h5>
          <p className='font-normal text-xl text-[#9F9F9F]'>For all orders over $50, consectetur <br /> adipim scing elit.</p>
        </div>
        <div className='w-[376px] h-[108px]'>
          <h5 className='w-[244px] h-[48px] font-medium text-3xl '>90 Days Return</h5>
          <p className='font-normal text-xl text-[#9F9F9F]'>If goods have problems, consectetur adipim scing elit..</p>
        </div>
        <div className='w-[376px] h-[108px]'>
          <h5 className='w-[265px] h-[48px] font-medium text-3xl'>Secure Payment</h5>
          <p className='font-normal text-xl text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit..</p>
        </div>
      </div>
    </div>
  )
}
