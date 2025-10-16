import { useState, useContext, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { AuthContext } from "../Context/UserContext";
import { ShopContext } from "../Context/ShopContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navigate = useNavigate()

  const { user, logout, isLoggedIn } = useContext(AuthContext);
  const { wishlist, cart } = useContext(ShopContext);

  const userMenuRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`absolute top-0 left-0 w-full  z-20 ${isHome ? "bg-bg-white/100 bg-opacity-40" : "fixed bg-black"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <div
          className="font-logo text-3xl bg-clip-text text-transparent drop-shadow-lg"
          style={{ color: "#c9a64e" }}
        >
          <Link to="/">Brightique</Link>
        </div>

        
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-yellow-500 transition-colors duration-300"
          >
            About
          </Link>
        </div>

        
        <div className="hidden md:flex items-center space-x-4">
         
          <Link
            to="/wishlist"
            className="relative text-white hover:text-yellow-500 transition-colors duration-300"
          >
            <HeartIcon className="h-6 w-6" />
            {wishlist.length > 0 && (
              <span
                className="absolute -top-2 -right-2 text-white text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "#c9a64e" }}
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          
          <Link
            to="/cart"
            className="relative text-white hover:text-yellow-500 transition-colors duration-300"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            {cart.length > 0 && (
              <span
                className="absolute -top-2 -right-2 text-white text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "#c9a64e" }}
              >
                {cart.reduce(
                  (total, item) => total + (Number(item.quantity) || 1),
                  0
                )}
              </span>
            )}
          </Link>

          
          <div className="relative" ref={userMenuRef}>
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-1 text-white hover:text-yellow-500 transition"
                >
                  <UserIcon className="h-6 w-6" />
                  <span className="font-medium">{user.name}</span>
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/order"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    
                     {user?.role==="admin"&&(
                      <Link 
                      to="/admin"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                      >
                        Admin Panel
                      </Link>
                     )}

                    <button
                      onClick={() => {
                        logout();
                        setUserMenuOpen(false);
                        navigate("/Login")
                      }}
                      className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <UserIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-4 py-4 space-y-4">
          <Link
            to="/"
            className="block text-white hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block text-white hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <div className="flex items-center space-x-4 mt-4">
            <Link
              to="/wishlist"
              className="text-white hover:text-yellow-500 transition"
            >
              <HeartIcon className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className="relative text-white hover:text-yellow-500 transition"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            {isLoggedIn ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-1 text-white hover:text-yellow-500 transition"
                >
                  <UserIcon className="h-6 w-6" />
                  <span className="font-medium">{user.name}</span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/order"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white hover:text-yellow-500 transition"
              >
                <UserIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
