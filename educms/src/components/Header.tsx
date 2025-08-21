'use client';

import { FaBars, FaBell, FaChevronDown } from 'react-icons/fa';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={onMenuClick}
          className="p-2 rounded-lg bg-white shadow-md text-indigo-600"
        >
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Top Navigation */}
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <FaBell className="text-gray-600" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="User" 
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium">Sarah Johnson</span>
              <FaChevronDown className="text-xs text-gray-500" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}