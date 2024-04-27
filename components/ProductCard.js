// components/ProductCard.js
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white transition duration-300 hover:shadow-xl rounded-lg overflow-hidden hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <Image src={product.image} alt={`Image of ${product.name}`} layout="responsive" width={400} height={300} className="duration-300 transform hover:scale-110" />
            </div>
            <div className="p-6">
                <h4 className="text-xl font-semibold mb-1">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-lg font-semibold text-purple-600">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
