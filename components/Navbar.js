import React from 'react'
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
    )
}
