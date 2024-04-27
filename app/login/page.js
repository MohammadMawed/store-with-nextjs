import React from 'react';
import Link from 'next/link';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 via-red-500 to-purple-700">
            <Link href="/">
                <div className="absolute left-4 top-4 p-2 bg-white rounded-full cursor-pointer shadow hover:shadow-lg transition-shadow">
                    {/* SVG for the back arrow in black */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="h-6 w-6">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L6.414 9H17a1 1 0 110 2H6.414l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </Link>
            <div className="relative w-full max-w-md">

                <div className="m-4 md:m-6 lg:m-8 p-4 bg-white shadow-md rounded-lg space-y-8">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Log In
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account? <Link href="/signup" legacyBehavior><span className="font-medium text-blue-600 hover:text-blue-500">Sign up</span></Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
