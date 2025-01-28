import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-600 body-font">
            <div className="container mx-auto px-5 py-16">
                <div className="flex flex-wrap md:justify-between justify-center">
                    <div className="w-full md:w-1/4 mb-10 md:mb-0 text-center md:text-left">
                        <p className="text-sm text-gray-600">
                            400 University Drive Suite 200 Coral Gables,<br />
                            FL 33134 USA
                        </p>
                    </div>
                    <div className="w-full md:w-3/4 flex flex-wrap justify-center md:justify-between">
                        <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">Links</h2>
                            <nav className="list-none">
                                <li>
                                    <Link href="/" className="text-gray-900 hover:text-blue-800">Home</Link>
                                </li>
                                <li>
                                    <Link href="/Shop" className="text-gray-900 hover:text-blue-800">Shop</Link>
                                </li>
                                <li>
                                    <Link href="/About" className="text-gray-900 hover:text-blue-800">About</Link>
                                </li>
                                <li>
                                    <Link href="/Contact" className="text-gray-900 hover:text-blue-800">Contact</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
                            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">Help</h2>
                            <nav className="list-none">
                                <li>
                                    <a href="#" className="text-gray-900 hover:text-blue-800">Payment Option</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 hover:text-blue-800">Return</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 hover:text-blue-800">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full md:w-1/4 px-4">
                            <h2 className="title-font font-medium text-gray-600 tracking-widest text-sm mb-3">Newsletter</h2>
                            <div className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full border-b border-gray-900 text-gray-900 py-1 px-2 focus:outline-none focus:border-blue-800"
                                />
                                <button className="ml-2 px-4 py-1 bg-blue-700 text-white text-sm font-medium rounded hover:bg-blue-900">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 border-t border-gray-300 py-4">
                <div className="container mx-auto text-center">
                    <p className="text-sm text-gray-600">&copy; 2022 Meubel House. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

