import React from "react";
import { useNavigate } from "react-router-dom";


import img1 from "../assets/collage-1.webp";
import img2 from "../assets/image4.webp";
import img3 from "../assets/image3.webp";
import img4 from "../assets/collage-5.webp";
import img5 from "../assets/image5.webp";

export default function WhyChooseUs() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div className="py-14 px-6 md:px-10 lg:px-20 bg-white">
      
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-8"
      style={{ color: "#c9a64e" }}
      >
        Why Choose Us
      </h2>

      
      <div
        className="rounded-3xl py-8 px-6 md:px-10 flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto shadow-md"
        style={{ backgroundColor: "#2f2f2f" }}
      >
        
        <div className="relative w-full lg:w-1/2 grid grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img1}
              alt="Lighting 1"
              className="object-cover w-full h-36 sm:h-44 transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg mt-5">
            <img
              src={img2}
              alt="Lighting 2"
              className="object-cover w-full h-28 sm:h-36 transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg flex justify-center mt-2">
            <img
              src={img3}
              alt="Lighting 3"
              className="object-cover w-3/4 h-36 sm:h-44 transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img4}
              alt="Lighting 4"
              className="object-cover w-full h-32 sm:h-40 transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg mt-3">
            <img
              src={img5}
              alt="Lighting 5"
              className="object-cover w-full h-40 sm:h-48 transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        
        <div className="lg:w-1/2 text-center lg:text-left">
          <p
            className="mb-6 leading-relaxed text-base sm:text-lg"
            style={{ color: "#c9a64e" }}
          >
            At <span className="font-semibold">Brightique</span>, we craft lighting that enhances the beauty of your home.
            Each design combines artistic elegance and modern craftsmanship —
            illuminating your space with warmth, comfort, and timeless appeal.
          </p>

          <button
            onClick={handleNavigate}
            className="mt-3 bg-[#c9a64e] text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-[#b48e3f] transition-all duration-300"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
}
