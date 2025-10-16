import React, {  useState } from "react";
import Sidebar from "../Components/Sidebar";


export default function AdminLayout({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      
      <div
        className={`flex-1 transition-all duration-300 p-6 min-h-screen overflow-y-auto  ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}

      >
        {children}
      </div>
    </div>
  );
}
