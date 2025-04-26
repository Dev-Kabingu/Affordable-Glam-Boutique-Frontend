import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import img1 from "../assets/img (1).jpeg";
import img2 from "../assets/img (13).jpeg";
import img3 from "../assets/img (4).jpeg";
import img4 from "../assets/img (14).jpeg";
import img5 from "../assets/img (24).jpeg";

const LatestFashionCollection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="px-6 md:px-20 py-16 bg-amber-50">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div className="relative w-full md:h-120">
          <img
            src={images[currentImageIndex]}
            alt="collection"
            className="w-full h-full object-cover object-center rounded-xl"
            loading="lazy"
          />
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-amber-600 text-white p-2 rounded-full shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-amber-600 text-white p-2 rounded-full shadow-md"
          >
            &gt;
          </button>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-amber-900">
            Latest Fashion Collection
          </h2>
          <p className="text-gray-600 mb-6">
            A new wave of style: from bold jackets to elegant blazers.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {["Jacket", "Shirts", "Pants", "Suits", "Blazers", "Hoodies", "Knitwear"].map((item) => (
              <Link
                key={item}
                to={`/products/${item.toLowerCase()}`}
                className="px-4 py-2 border border-amber-300 rounded-full text-sm hover:bg-amber-100 hover:scale-105 transition"
              >
                {item}
              </Link>
            ))}
          </div>

          <Link to = '/collection'><button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition">
            Explore Full Collection
          </button></Link>

          <div className="mt-6 text-red-500 font-semibold">
            <span>Special Offer: 20% off on all jackets! Limited time only.</span>
          </div>

          <div className="mt-6 text-gray-600">
            <span className="flex items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-gray-300" />
              <span className="ml-2">(50 reviews)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestFashionCollection;
