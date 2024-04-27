// pages/products.js
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// Asynchronously fetch the data immediately and store it in a variable.
let globalProducts = [];

(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        globalProducts = data.map(post => ({
            id: post.id,
            name: post.title,
            description: post.body,
            price: `$${((post.id % 20) * 5 + 19.99).toFixed(2)}`, // Random pricing logic
            image: '/product1.jpg' // Placeholder image for all products
        }));
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
})();

const ProductsPage = () => {
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
                    {globalProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductsPage;
