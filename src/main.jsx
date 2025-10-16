import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import AuthProvider from './Context/UserContext.jsx';
import { ShopProvider } from './Context/ShopContext.jsx';
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
     <ShopProvider>
      <Toaster position="top-center" reverseOrder={false} />
    <App />
    </ShopProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
