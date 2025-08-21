'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeSidebar}
        ></div>
      )}
      
      {/* Main Content */}
      <div className="md:ml-64 min-h-screen">
        <Header onMenuClick={toggleSidebar} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}