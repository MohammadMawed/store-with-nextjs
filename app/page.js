import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from 'next/link';


// Define your hardcoded product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: '$29.99', image: '/product1.jpg' },
  { id: 2, name: 'Product 2', description: 'Description for product 2', price: '$39.99', image: '/product1.jpg' },
  { id: 3, name: 'Product 3', description: 'Description for product 3', price: '$49.99', image: '/product1.jpg' },
  { id: 4, name: 'Product 4', description: 'Description for product 4', price: '$59.99', image: '/product1.jpg' },
  { id: 5, name: 'Product 5', description: 'Description for product 5', price: '$69.99', image: '/product1.jpg' },
  { id: 6, name: 'Product 6', description: 'Description for product 6', price: '$79.99', image: '/product1.jpg' },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-700">
        <Navbar />


        <div className="hero bg-cover bg-center py-24" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            <div className="flex-1">
              <h2 className="text-5xl font-bold mb-3">Explore the New Era of Innovation</h2>
              <p className="mb-8 text-lg">Dive into our collection of latest products designed for the modern age.</p>
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-lg">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto py-12">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-10">Our Featured Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <section className="text-center py-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="max-w-4xl mx-auto text-gray-600">
            At Product Store, our mission is to innovate the way you shop. We believe in quality, customer service, and sustainability, bringing you products that you can trust and love.
          </p>
        </section>

        <section className="bg-gray-100 py-12">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">Customer Testimonials</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="max-w-sm bg-white rounded-lg shadow p-4">
              <p className="text-gray-600 italic">"I've never been happier with a purchase! High-quality products and friendly service. Highly recommend!"</p>
              <div className="mt-4 text-right">
                <span className="font-bold">- Jane Doe</span>
              </div>
            </div>
            <div className="max-w-sm bg-white rounded-lg shadow p-4">
              <p className="text-gray-600 italic">"Fast delivery and stellar customer support. Product Store is my go-to for tech gadgets."</p>
              <div className="mt-4 text-right">
                <span className="font-bold">- John Smith</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">Our Services</h3>
          <div className="flex flex-wrap justify-center text-center gap-10">
            <div className="w-1/4">
              <Image src="/fast-delivery.svg" alt="Fast Delivery" width={64} height={64} />
              <h4 className="font-bold mt-2">Fast Delivery</h4>
              <p className="text-gray-600">Speedy and reliable delivery services.</p>
            </div>
            <div className="w-1/4">
              <Image src="/quality-products.svg" alt="Quality Products" width={64} height={64} />
              <h4 className="font-bold mt-2">Quality Products</h4>
              <p className="text-gray-600">Only the best products pass our tests.</p>
            </div>
            <div className="w-1/4">
              <Image src="/customer-support.svg" alt="Customer Support" width={64} height={64} />
              <h4 className="font-bold mt-2">24/7 Support</h4>
              <p className="text-gray-600">Always here to help and provide information.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />


    </div>
  );
}
