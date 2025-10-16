import React from "react";

export default function About() {
  return (
    <div className="bg-[#f7f5f0] min-h-screen py-16 px-6 text-gray-800 mt-15 relative overflow-hidden" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
     
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#d4af37] rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-[#d4af37] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#d4af37] rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
       
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#d4af37]"></div>
            <h1 className="text-5xl font-bold text-[#d4af37] tracking-wider">
              About Us
            </h1>
            <div className="w-16 h-px bg-[#d4af37]"></div>
          </div>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-2"></div>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto opacity-60"></div>
        </div>

        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-[#d4af37]/20 p-8 mb-10 relative">
          
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#d4af37]"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#d4af37]"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]"></div>

          <p className="text-lg leading-relaxed text-justify mb-8">
            Welcome to <span className="font-semibold text-[#d4af37] italic">Brightique</span>, 
            where brilliance meets boutique luxury. We are more than just a brand — we're a 
            celebration of elegance, craftsmanship, and timeless design. Every product we offer 
            reflects our passion for beauty and attention to detail, ensuring that each piece 
            adds a touch of sophistication to your everyday life. From the smallest accessory 
            to the most refined décor, we believe that true luxury lies in the harmony of quality 
            and simplicity.
          </p>

          
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-[#d4af37]/30 rounded-2xl transform rotate-1"></div>
              <div className="absolute -inset-2 border border-[#d4af37]/20 rounded-xl transform -rotate-1"></div>
              <img
                src="https://lostine.com/cdn/shop/files/LOSTINE_030325_DOGWOOD_T_LAMP_CHAMBRON_LOUNGE_CHAIR_HALF_MOON_S_TABLE_PAINTING_LIFESTYLE_278_500x.jpg?v=1741276312"
                alt="Brightique collection"
                className="rounded-xl shadow-lg w-80 h-80 object-cover relative z-10 border-2 border-white"
              />
            </div>
          </div>

          <p className="text-lg text-justify leading-relaxed">
            At Brightique, we strive to create a seamless shopping experience that inspires confidence 
            and creativity. Our collections are thoughtfully curated, blending modern aesthetics 
            with classic charm. Whether you're seeking something bold and contemporary or subtle 
            and traditional, you'll find that every Brightique creation tells a story of refinement 
            and purpose. With a commitment to excellence and authenticity, we continue to redefine 
            what it means to live beautifully — one piece at a time.
            <br />
            <br />
            <span className="italic text-[#d4af37] font-medium">
              Brightique isn't just a name — it's a promise of brilliance, uniqueness, and charm. 
              We invite you to explore our world of timeless elegance and discover how a touch 
              of Brightique can illuminate your space and your style.
            </span>
          </p>
        </div>

        
        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-12 h-px bg-[#d4af37]/50"></div>
            <div className="w-3 h-3 border-2 border-[#d4af37] rotate-45"></div>
            <div className="w-12 h-px bg-[#d4af37]/50"></div>
          </div>
          <p className="text-sm text-gray-600 italic">
            Established with elegance, crafted with care
          </p>
        </div>
      </div>
    </div>
  );
}