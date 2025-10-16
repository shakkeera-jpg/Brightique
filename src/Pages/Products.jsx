import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ShopContext } from "../Context/ShopContext";
import { AuthContext } from "../Context/UserContext";
import toast from "react-hot-toast";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const { user, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);

  const {
    addToWishlist,
    removeFromWishlist,
    wishlist,
    addToCart,
    isOutOfStock,
    limit,
    products: shopProducts,
  } = useContext(ShopContext);

  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    if (category) {
      setCategoryFilter(category);
    } else {
      setCategoryFilter("All");
    }
  }, [category]);

  const handleBuyNow = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    if (shopProducts.length > 0) {
      setProducts(shopProducts);
      setLoading(false);
    }
  }, [shopProducts]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const toggleWishlist = (product) => {
    if (wishlist.find((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
      toast.error("Removed from wishlist");
    } else {
      addToWishlist(product);
      toast.success("Item added to wishlist!")
    }
  };

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (isOutOfStock(product.id)) return;

    addToCart(product);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" ||
      product.category?.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = (productsArray) => {
    const sorted = [...productsArray];
    if (sortOrder === "lowToHigh")
      return sorted.sort((a, b) => a.price - b.price);
    if (sortOrder === "highToLow")
      return sorted.sort((a, b) => b.price - a.price);
    return sorted;
  };

  const displayedProducts = sortedProducts(filteredProducts);

  // Pagination logic
  const indexOfLast = currentPage * limit;
  const indexOfFirst = indexOfLast - limit;
  const ProductsPage = displayedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(displayedProducts.length / limit);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  const handleCategoryClick = (cat) => {
    setCategoryFilter(cat);
    navigate(
      cat === "All"
        ? `/products`
        : `/products?category=${encodeURIComponent(cat)}`
    );
  };

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      {/* Search & Filters */}
      <div className="flex flex-col gap-4 mb-10">
        <div className="w-full md:w-1/2 mx-auto">
          <div className="relative w-full">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search for lights..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 outline-none"
              style={{ boxShadow: "#c9a64e" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "All",
              "wall lights",
              "floor lamps",
              "table lamps",
              "outdoor lamps",
              "pendant",
              "chandeliers",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${categoryFilter === cat
                    ? `bg-yellow-600 text-white border-white shadow-md`
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                  }`}

                style={{
                  backgroundColor: categoryFilter === cat ? "#c9a64e" : "#fff"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Sort by:</label>
            <select
              className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">None</option>
              <option value="lowToHigh">Price: Low → High</option>
              <option value="highToLow">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products */}
      {ProductsPage.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          No products match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ProductsPage.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 overflow-hidden group relative"
            >
              {/* Wishlist Button */}
              <button
                onClick={() => {
                  if (isLoggedIn) {
                    toggleWishlist(product);
                  } else {
                    toast.error("Please log in first!");
                    navigate("/login");
                  }
                }}
                className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow hover:scale-110 transition"
              >
                <HeartIcon
                  className={`w-5 h-5 ${wishlist.find((item) => item.id === product.id)
                      ? "fill-yellow-600 text-yellow-600"
                      : "text-gray-400"
                    }`}
                />
              </button>

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              </div>

              {/* Product Details */}
              <div className="p-5">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-yellow-600 transition line-clamp-2 mb-1">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                  {isOutOfStock(product.id) ? (
                    <span className="text-red-500 font-medium">Out of stock</span>
                  ) : (
                    <span className="text-green-600 font-medium">
                      In stock ({product.stock})
                    </span>
                  )}

                  {product.size && (
                    <span className="text-gray-500">
                      Size: <strong>{product.size}</strong>
                    </span>
                  )}
                </div>

                <div className="mt-2">
                  <span className="text-base font-semibold text-gray-800">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-3 gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isOutOfStock(product.id)}
                    className={`flex items-center gap-1 px-3 py-1.5 text-white font-medium rounded-md transition text-sm ${isOutOfStock(product.id)
                        ? "bg-gray-400 cursor-not-allowed"
                        : "hover:bg-yellow-500"
                      }`}
                    style={{
                      backgroundColor: isOutOfStock(product.id)
                        ? "#9ca3af"
                        : "#c9a64e",
                    }}
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    {isOutOfStock(product.id) ? "Out of Stock" : "Add to Cart"}
                  </button>

                  <button
                    className="px-3 py-1.5 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition text-sm"
                    onClick={() => handleBuyNow(product.id)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1
                  ? "bg-yellow-400 text-white"
                  : "hover:bg-yellow-100"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
