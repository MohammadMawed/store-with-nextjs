import React from 'react'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="text-lg">
                        <h2 className="font-bold text-xl mb-2">Product Store</h2>
                        <p>Discover our wide range of quality products.</p>
                    </div>
                    <nav className="flex flex-wrap justify-between">
                        <Link href="/" passHref>
                            <span className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300 cursor-pointer">Home</span>
                        </Link>
                        <Link href="/about" passHref>
                            <span className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300 cursor-pointer">About Us</span>
                        </Link>
                        <Link href="/products" passHref>
                            <span className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300 cursor-pointer">Products</span>
                        </Link>
                        <Link href="/contact" passHref>
                            <span className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300 cursor-pointer">Contact</span>
                        </Link>
                    </nav>
                    <div>
                        <p>Follow us:</p>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="hover:text-gray-400 transition duration-300">Facebook</a>
                            <a href="#" className="hover:text-gray-400 transition duration-300">Twitter</a>
                            <a href="#" className="hover:text-gray-400 transition duration-300">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
