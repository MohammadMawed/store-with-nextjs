// components/ProductCard.js
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition duration-300 hover:shadow-lg hover:border-gray-300">
            <div className="relative group overflow-hidden">
                <Image
                    src={product.image}
                    alt={`Image of ${product.name}`}
                    layout="responsive"
                    width={400}
                    height={300}
                    className="duration-500 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-500"></div>
            </div>
            <div className="p-4">
                <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-md font-bold text-gray-800">{product.price}</p>
                    <button className="py-1 px-3 text-sm text-gray-800 border border-gray-300 rounded hover:bg-gray-100 transition duration-300">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
