import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AiTwotoneCloseCircle } from 'react-icons/ai'
import { CiLock } from 'react-icons/ci'
import Cart from '@/app/Blogs/Cart/page'

export default function Cartsidebar() {
  return (
    <div>
      <Cart />
      <div className='absolute right-2 top-2'>
        <div className='bg-white px-3 py-7'>
          <div className=' mb-80  '>
            <div className='flex justify-between gap-32 text-2xl text-black font-bold px-5  '>
              <h1>Shopping Cart  </h1>
              <CiLock className='text-[#9F9F9F]' />
            </div>
            <div className='bg-gray-400 h-0.5 w-64 my-4  opacity-50'></div>
            <div className='flex justify-between '>
              <div className='bg-[#FBEBB5] rounded-lg  '>
                <Image src="/images/Asgaard sofa 1.png"
                  alt="Tabnail"
                  width={111}
                  height={90}
                  className='relative' />


              </div>
              <div className='text-lg '>
                <h1> Asgaard Sofa </h1>
                <span className='flex gap-5 '> 1 x<h3 className='text-yellow-500'>Rs.250.000.00</h3>
                  <AiTwotoneCloseCircle className='text-2xl' /></span>

              </div>
            </div>
          </div>
          {/* bottom side */}
          <div className='flex justify-between text-2xl font-bold my-9'>
            <h1>Subtotal</h1>
            <h1 className='text-yellow-600'>250.000.00</h1>
          </div>
          <div className='bg-gray-400 h-0.5 w-full my-4  opacity-50'></div>
          <div className='flex justify-between'>
            <button className='border border-black px-5 py-1 rounded-3xl hover:text-blue-800 hover:border-blue-900'><Link href="/Blogs/Cart">ViewCart</Link></button>
            <button className='border border-black px-5 py-1 rounded-3xl hover:text-blue-800 hover:border-blue-900'><Link href="/Blogs/Checkout">Checkout</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
