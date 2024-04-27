// pages/Products.js
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$29.99', image: '/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$39.99', image: '/product1.jpg' },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$49.99', image: '/product1.jpg' },
    { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$59.99', image: '/product1.jpg' },
    { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$69.99', image: '/product1.jpg' },
    { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$79.99', image: '/product1.jpg' },
  ];
  

export default function Products() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
            <Navbar />
            <main className="container mx-auto py-12 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">All Products</h2>
                <div className="text-center mb-8">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="px-4 py-3 border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        style={{
                            maxWidth: '80%',
                            width: '1000px',
                            fontSize: '18px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
                            backgroundColor: 'white',
                            border: '1px solid #ddd',
                            borderRadius: '10px' 
                        }}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
