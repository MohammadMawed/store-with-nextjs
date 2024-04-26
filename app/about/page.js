import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-700">
        <header className="container mx-auto px-6 py-4 flex justify-between items-center text-white relative">
          <h1 className="font-bold text-xl">Product Store</h1>
          <nav className="hidden lg:flex items-center">
            <a href="/" className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300">Home</a>
            <a href="/about" className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300">About Us</a>
            <a href="#" className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300">Products</a>
            <a href="#" className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300">Contact</a>
          </nav>
        </header>

        <div className="hero bg-cover bg-center py-24 relative overflow-hidden" style={{ backgroundImage: "url('/about-hero.jpg')" }}>
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold text-white animate-pulse">About Us</h2>
            <p className="text-lg text-white mt-4 opacity-75 transition-opacity duration-500 hover:opacity-100">Learn more about our journey and mission.</p>
          </div>
        </div>
      </div>

      <main className="container mx-auto py-12 px-6 text-left">
        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            At Product Store, our mission extends beyond mere profitability. We aim to positively impact our customers' lives through innovative products that enhance both convenience and sustainability. Our commitment is to ensure quality and integrity in every item we offer.
          </p>
        </section>
        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to lead the market not just through excellent products, but also through meaningful initiatives that contribute to global sustainability. We see a future where our company plays a pivotal role in moving the industry towards a more responsible and environmentally-conscious direction.
          </p>
        </section>
        <section className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Our History
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Since opening our doors in 2010, Product Store has expanded rapidly. From our humble beginnings in a small office, we have grown into a nationwide leader in retail. Along the way, we've remained committed to our principles, which has helped forge strong relationships with both partners and customers alike.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Through strategic innovation and continuous improvement of our business practices, we continue to stay at the forefront of the industry, always looking for ways to better serve our customers and contribute positively to the economy.
          </p>
        </section>
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-lg">
              <h2 className="font-bold text-xl mb-2">Product Store</h2>
              <p>Discover our wide range of quality products.</p>
            </div>
            <nav className="flex flex-wrap justify-between">
              <a href="#" className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300">Home</a>
              <a href="/about" className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300">About Us</a>
              <a href="#" className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300">Products</a>
              <a href="#" className="px-3 py-2 rounded hover:bg-purple-700 transition duration-300">Contact</a>
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
    </div>
  );
}
