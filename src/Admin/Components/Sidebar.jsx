import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const DashboardIcon = ({ isActive }) => (
  <svg className={`w-5 h-5 ${isActive ? 'stroke-white' : 'stroke-amber-600'}`} viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
  </svg>
);

const ProductsIcon = ({ isActive }) => (
  <svg className={`w-5 h-5 ${isActive ? 'stroke-white' : 'stroke-amber-600'}`} viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const OrdersIcon = ({ isActive }) => (
  <svg className={`w-5 h-5 ${isActive ? 'stroke-white' : 'stroke-amber-600'}`} viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const UsersIcon = ({ isActive }) => (
  <svg className={`w-5 h-5 ${isActive ? 'stroke-white' : 'stroke-amber-600'}`} viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const HomeIcon = ({ isActive }) => (
  <svg className={`w-5 h-5 ${isActive ? 'stroke-white' : 'stroke-amber-600'}`} viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); 
  const {logout}= useContext(AuthContext)

  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) => `
    flex items-center gap-3 p-3.5 rounded-xl mb-2 relative overflow-hidden
    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
    border font-medium text-sm tracking-wide
    ${isActive(path)
      ? 'text-white bg-amber-600 border-amber-500 shadow-lg'
      : 'text-amber-800 bg-amber-100 border-amber-200 shadow-sm hover:bg-amber-200'
    }
    hover:translate-x-1.5
  `;

  const activeIndicatorClasses = `
    absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[70%]
    bg-amber-400 rounded-r
  `;

  return (
    <>
      
      <button
        className="md:hidden fixed top-5 left-5 z-60 p-2 bg-amber-600 rounded-md text-white shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

     
      <div className={`
       w-72 min-h-screen bg-amber-50 text-amber-900
       p-7 shadow-xl border-r border-amber-200
       fixed top-0 left-0 z-50 
       transform transition-transform duration-300
       ${isOpen ? "translate-x-0" : "-translate-x-full"} 
       md:translate-x-0
`}>
       
        <div className="relative z-10 mb-8">
          <h2 className="
            text-xl font-bold tracking-wide mb-2 text-amber-800
            flex items-center gap-2.5
          ">
            <div className="
              w-8 h-8 bg-amber-600 rounded-lg
              flex items-center justify-center shadow-md
            ">
              <svg className="w-4 h-4 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            Admin Panel
          </h2>
          <div className="h-1 bg-amber-300 rounded opacity-60" />
        </div>

        
        <nav className="relative z-10">
          <Link to="/admin/dashboard" className={linkClasses("/admin/dashboard")}>
            {isActive("/admin/dashboard") && <div className={activeIndicatorClasses} />}
            <DashboardIcon isActive={isActive("/admin/dashboard")} />
            Dashboard
          </Link>

          <Link to="/admin/products" className={linkClasses("/admin/products")}>
            {isActive("/admin/products") && <div className={activeIndicatorClasses} />}
            <ProductsIcon isActive={isActive("/admin/products")} />
            Products
          </Link>

          <Link to="/admin/orders" className={linkClasses("/admin/orders")}>
            {isActive("/admin/orders") && <div className={activeIndicatorClasses} />}
            <OrdersIcon isActive={isActive("/admin/orders")} />
            Orders
          </Link>

          <Link to="/admin/user" className={linkClasses("/admin/user")}>
            {isActive("/admin/user") && <div className={activeIndicatorClasses} />}
            <UsersIcon isActive={isActive("/admin/user")} />
            Users
          </Link>

          <div className="h-px bg-amber-300 my-6 opacity-40" />

          <Link to="/" className={linkClasses("/")}>
            {isActive("/") && <div className={activeIndicatorClasses} />}
            <HomeIcon isActive={isActive("/")} />
            Back to Website
          </Link>
        </nav>

        
        <div className="absolute bottom-10 left-5 right-5 text-md text-amber-700 text-center pt-5 border-t border-amber-300">
          
          <button onClick={logout} className="cursor-pointer hover:text-amber-900 transition-colors">log out</button>
        </div>
        
      </div>
    </>
  );
}