import React from 'react';
import Link from 'next/link';

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 via-red-500 to-purple-700">
            <div className="relative w-full max-w-lg">
                <div className="m-4 md:m-6 lg:m-8 p-4 bg-white shadow-md rounded-lg space-y-8">
                    <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800">Create Your Account</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? 
                        <Link href="/login">
                            <span className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
