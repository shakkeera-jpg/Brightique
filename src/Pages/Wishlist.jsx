import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TrashIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
    addToCartFromWishlist,
    isOutOfStock,
  } = useContext(ShopContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white py-8 px-4 mt-20">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent mb-3 font-serif">
            My Wishlist
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-4"></div>
          <p className="text-yellow-700/80 text-sm">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {wishlist.length === 0 ? (
          
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-600 flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">Your Wishlist is Empty</h3>
              <p className="text-yellow-700/70 mb-6 text-sm">
                Start exploring and add items you love
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-yellow-900 font-medium px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-yellow-500/20 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Explore Products
              </Link>
            </div>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100 hover:border-yellow-200 overflow-hidden"
              >
                
                <div className="relative overflow-hidden bg-yellow-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  
                  {isOutOfStock(item.id) && (
                    <div className="absolute top-2 right-2 bg-yellow-600 text-white px-2 py-1 rounded text-xs font-medium shadow-sm">
                      Out of Stock
                    </div>
                  )}
                </div>

                
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-yellow-900 mb-2 line-clamp-2 group-hover:text-yellow-700 transition-colors duration-300 leading-tight">
                    {item.name}
                  </h2>
                  <p className="text-lg font-bold text-yellow-600 mb-3">
                    ₹{item.price}
                  </p>

                  
                  <div className="flex items-center justify-between gap-2">
                    
                    <button
                      onClick={() => addToCartFromWishlist(item)}
                      disabled={isOutOfStock(item.id)}
                      className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                        isOutOfStock(item.id)
                          ? "bg-yellow-100 text-yellow-400 cursor-not-allowed border border-yellow-200"
                          : "bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-white shadow-sm hover:shadow-md"
                      }`}
                    >
                      <ShoppingCartIcon className="w-4 h-4" />
                      {isOutOfStock(item.id) ? "Out of Stock" : "Add to Cart"}
                    </button>

                    
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-600 hover:text-yellow-700 rounded-lg border border-yellow-200 transition-all duration-300"
                      title="Remove from wishlist"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}