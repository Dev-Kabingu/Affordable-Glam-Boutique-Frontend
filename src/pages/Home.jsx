import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaAward, FaLightbulb, FaQuoteLeft } from "react-icons/fa";
import LatestFashionCollection from "../components/LatestFashionCollection"
import heroImage from "../assets/hero.png"


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-indigo-50 to-white text-gray-800 font-[Inter]">
      <button className="fixed bottom-6 right-6 bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-amber-700 transition z-50">
        Shop Now
      </button>

      {/* Hero Section */}
      <section
        data-aos="fade-up"
        className="min-h-[90vh] grid md:grid-cols-2 gap-6 items-center px-6 md:px-20 py-10"
      >
     <div className="space-y-8 max-w-2xl mx-auto px-4">
  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">  Redefining <span className="text-amber-600">Affordable Glamour</span> </h1>
  
  <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
  Discover trendy slides, elegant outfits, and must-have handbags curated just for you. Fashion made effortless..
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <button className="bg-amber-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-amber-700 transition duration-300 font-medium">
      Discover More
    </button>
    {/* <button className="text-amber-600 border border-amber-600 px-8 py-3 rounded-full hover:bg-amber-50 transition duration-300 font-medium">
      Watch New Trends
    </button> */}
  </div>
</div>

        <div className="relative" data-aos="fade-left">
          <div className="w-[450px] h-[450px] rounded-2xl overflow-hidden mx-auto">
            <img
              src={heroImage}
              alt="fashion"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute top-4 right-12 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
            BRING NEW TREND
          </span>
        </div>
      </section>


      {/* History Section */}
      <section className="px-6 md:px-20 py-16" data-aos="fade-right">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">History Of Fashion Vog</h2>
            <p className="text-gray-600 mb-4">
              Over the years, Fashion Vog has transformed the industry through innovation and elegance.
            </p>
            <button className="text-orange-600 font-medium flex items-center gap-2">
              Read More <span className="text-lg">&#10140;</span>
            </button>
          </div>
          <img
            src="https://i.ibb.co/C06L6Fb/fashion-model2.jpg"
            alt="fashion"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Latest Fashion Collection */}
      <LatestFashionCollection />

      {/* Deal of the Week */}
      <section className="px-6 md:px-20 py-16" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-10">Deal Of The Week</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={`https://i.ibb.co/YPz2xLz/fashion${item}.jpg`}
                alt={`deal-${item}`}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Stylish Outfit #{item}</h3>
                <p className="text-gray-500 text-sm mb-2">$49.99</p>
                <button className="text-indigo-600 hover:underline text-sm">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-50" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-10 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <FaQuoteLeft className="text-orange-400 text-2xl mb-4" />
              <p className="text-gray-600 mb-4">“Absolutely stunning styles, great service, and fast delivery!”</p>
              <p className="text-sm font-semibold text-indigo-700">— Fashion Lover #{i}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are section */}
      <section className="px-6 md:px-20 py-16 bg-gray-50" data-aos="fade-up">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are?</h2>
    <p className="text-lg text-gray-600 mx-auto max-w-3xl">
      We bring decades of fashion expertise with cutting-edge trends and elite models worldwide. From styling to the latest collections, we aim to empower individuals through fashion.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
      <FaStar className="text-orange-500 text-3xl" />
      <p className="text-lg text-gray-800">Over 20 years experience</p>
    </div>

    <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
      <FaAward className="text-orange-500 text-3xl" />
      <p className="text-lg text-gray-800">Best model agency in the world</p>
    </div>

    <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
      <FaLightbulb className="text-orange-500 text-3xl" />
      <p className="text-lg text-gray-800">Professional advice & styling</p>
    </div>
  </div>

  {/* Call-to-action Button */}
  <div className="text-center mt-10">
    <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
      Learn More About Us
    </button>
  </div>
</section>


      {/* Newsletter Section */}
      <section className="px-6 md:px-20 py-16" data-aos="fade-up">
        <div className="bg-indigo-100 p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-6">Get the latest trends, promotions, and fashion tips.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg border border-gray-300 w-full sm:w-80"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
