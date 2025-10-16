import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-yellow-500/20 py-8">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent mb-3 font-serif">
              Brightique
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Discover premium products and experience luxury shopping redefined.
            </p>
            <div className="flex gap-3 mt-4">
              {['M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', 
                'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z']
                .map((path, index) => (
                <div key={index} className="w-8 h-8 bg-black/50 rounded flex items-center justify-center border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={path} />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="text-md font-semibold text-white mb-3 font-serif">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Products', 'About'].map((item) => (
                <Link
                  key={item}
                  to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Brightique. All rights reserved.
            </p>
            
            
            <div className="text-gray-500 text-xs">
              <p>support@brightique.com</p>
            </div>
          </div>
        </div>

        
        <div className="text-center mt-4">
          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 px-3 py-1 rounded-full text-yellow-400 text-xs font-medium">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Premium Luxury
          </span>
        </div>
      </div>
    </footer>
  );
}