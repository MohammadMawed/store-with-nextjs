import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">

      <Navbar />

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

      <Footer />
    </div>
  );
}
