import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
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
                        <span className="text-4xl font-bold">Cart</span>
                    </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-sm">
                    <Link href="#">Home</Link>
                    <IoIosArrowForward />
                    <Link href="#">Cart</Link>
                </div>
            </div>

            {/* Cart Section */}
            <div className="w-full py-12 px-4 sm:px-8">
                <div className="lg:flex lg:space-x-8">
                    {/* Cart Items */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center p-4 bg-[#FFF9E5] rounded-md">
                            <span>Product Name</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Total</span>
                        </div>

                        <div className="flex items-center justify-between p-4 my-4 bg-white rounded-md">
                            <Image
                                src="/images/Asgaard sofa 1.png"
                                alt="sofa"
                                width={112}
                                height={106}
                                className="rounded-md"
                            />
                            <span className="text-gray-400">Asgaard sofa</span>
                            <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                            <span className="border border-[#9F9F9F] px-4 py-1 rounded-md">1</span>
                            <span>Rs. 250,000.00</span>
                            <Image
                                src="/Shop img/Vector (5).png"
                                alt="dustbin"
                                width={21}
                                height={21.88}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="mt-8 lg:mt-0 lg:w-[400px] bg-[#FFF9E5] p-6 rounded-md">
                        <h2 className="text-center text-2xl font-bold mb-6">Cart Total</h2>
                        <div className="flex justify-between text-base font-normal mb-4">
                            <span>Subtotal</span>
                            <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                        </div>
                        <div className="flex justify-between text-base font-bold mb-6">
                            <span>Total</span>
                            <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                        </div>
                        <button className="w-full py-3 text-center border border-black rounded-md hover:bg-gray-100 transition">
                            <Link href="/Blogs/Checkout">Check Out</Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center bg-[#FAF4F4] p-8 space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="text-center">
                    <h5 className="text-2xl font-medium mb-2">Free Delivery</h5>
                    <p className="text-[#9F9F9F] text-base">
                        For all orders over $50, consectetur <br /> adipim scing elit.
                    </p>
                </div>
                <div className="text-center">
                    <h5 className="text-2xl font-medium mb-2">90 Days Return</h5>
                    <p className="text-[#9F9F9F] text-base">
                        If goods have problems, consectetur adipim scing elit.
                    </p>
                </div>
                <div className="text-center">
                    <h5 className="text-2xl font-medium mb-2">Secure Payment</h5>
                    <p className="text-[#9F9F9F] text-base">
                        100% secure payment, consectetur adipim scing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}




