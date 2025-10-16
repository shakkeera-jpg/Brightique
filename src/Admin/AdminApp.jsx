import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Product from "./Pages/Product";
import User from "./Pages/User";
import Orders from "./Pages/Orders";
import Sidebar from "./Components/Sidebar";
import AdminLayout from "./Pages/AdminLayout";

export default function AdminApp() {
  return (
    <div>
      
      <Sidebar />

     
      <div>
        <AdminLayout>
        <Routes> 
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="user" element={<User />} />
          <Route path="orders" element={<Orders />} />
        </Routes> 
        </AdminLayout>
      </div>
    </div>
  );
}
