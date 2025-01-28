"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPersonExclamation } from 'react-icons/bs';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-evenly items-center p-5 bg-[#FBEBB5]">
        

        {/* Menu Links */}
        <ul
          className={`lg:flex lg:gap-10 md:flex md:gap-8 sm:flex sm:gap-6 flex-col lg:flex-row absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#FBEBB5] lg:bg-transparent transition-transform duration-300 z-10 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <li className="menulink px-4 py-2 lg:p-0">
            <Link href="/">Home</Link>
          </li>
          <li className="menulink px-4 py-2 lg:p-0">
            <Link href="/Shop">Shop</Link>
          </li>
          <li className="menulink px-4 py-2 lg:p-0">
            <Link href="/Blogs">Blog</Link>
          </li>
          <li className="menulink px-4 py-2 lg:p-0">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-4">
          <Link href="/Contact/MyAccount">
            <BsPersonExclamation className="text-[20px] cursor-pointer" />
          </Link>
          <CiSearch className="text-[20px] cursor-pointer" />
          <CiHeart className="text-[20px] cursor-pointer" />
          <Link href="/Shop/Shopping-cart">
            <AiOutlineShoppingCart className="text-[20px] cursor-pointer" />
          </Link>
        </div>

        {/* Burger Menu Icon */}
        <div className="lg:hidden text-[24px] cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </div>
      </nav>
    </div>
  );
}



