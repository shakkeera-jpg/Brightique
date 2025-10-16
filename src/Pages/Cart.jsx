import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/CheckOut");
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 mt-25">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
            <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Add some beautiful items to your cart</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-2">Shopping Cart</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-2">{cart.length} {cart.length === 1 ? 'item' : 'items'} in cart</p>
        </div>

        
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center p-4">
                
                <div className="w-24 h-24 flex-shrink-0 bg-black rounded-lg p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                
                <div className="flex-1 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-gray-700 text-sm font-medium mb-1">{item.meterial}</p>
                  {item.size && <p className="text-gray-600 text-sm">Size: {item.size}</p>}
                  
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 bg-black text-yellow-500 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center font-semibold"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 bg-black text-yellow-500 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center font-semibold"
                      >
                        +
                      </button>
                    </div>

                    
                    <p className="text-lg font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>

                
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 border border-gray-300 hover:border-black"
                  >
                    <TrashIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex justify-between md:block text-gray-700">
              <span className="font-medium">Items:</span>
              <span className="font-semibold text-gray-900 md:ml-2">
                {cart.reduce((total, item) => total + (Number(item.quantity) || 1), 0)}
              </span>
            </div>

            <p className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
              Total: {formatPrice(totalPrice)}
            </p>

            <button
              className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-yellow-500 font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              onClick={handleCheckOut}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}