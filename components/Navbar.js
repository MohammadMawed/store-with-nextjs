import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-700">
            <header className="container mx-auto px-6 py-4 flex justify-between items-center text-white relative">
                <h1 className="font-bold text-xl">Product Store</h1>
                <button id="menu-toggle" className="text-orange-500 hover:text-white focus:outline-none lg:hidden">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z" />
                    </svg>
                </button>
                <nav className="hidden lg:flex items-center">
                    <Link href="/"><span className="hover:bg-white hover:text-orange-500 px-3 py-2 rounded transition duration-300 cursor-pointer">Home</span></Link>
                    <Link href="/products"><span className="hover:bg-white hover:text-orange-500 px-3 py-2 rounded transition duration-300 mx-2 cursor-pointer">Products</span></Link>
                    <Link href="/contact"><span className="hover:bg-white hover:text-orange-500 px-3 py-2 rounded transition duration-300 cursor-pointer">Contact</span></Link>
                    <Link href="/cart">
                        <div className="relative inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-orange-500 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h1l1 14h16l1-14h1M4 5h16l1 10H4L3 5zm0 0h16l1 10H4L3 5zm1 16a1 1 0 100-2 1 1 0 000 2zm14 0a1 1 0 100-2 1 1 0 000 2z" />
                            </svg>
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
                        </div>
                    </Link>
                    <Link href="/login"><span className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded ml-4 transition duration-300 cursor-pointer">Login</span></Link>
                </nav>
                <div className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-700 hidden" id="mobile-menu">
                    <nav className="flex flex-col items-center py-4">
                        <Link href="/"><span className="text-white px-3 py-2 rounded transition duration-300 cursor-pointer">Home</span></Link>
                        <Link href="/products"><span className="text-white px-3 py-2 rounded transition duration-300 cursor-pointer">Products</span></Link>
                        <Link href="/contact"><span className="text-white px-3 py-2 rounded transition duration-300 cursor-pointer">Contact</span></Link>
                        <Link href="/login"><span className="bg-white text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded transition duration-300 cursor-pointer">Login</span></Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}
