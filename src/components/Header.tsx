'use client';

import { FaBars, FaBell, FaChevronDown } from 'react-icons/fa';
import { useSession } from '@/context/SessionContext';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { user, logout, isLoading } = useSession();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

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
            
            <div className="relative">
              {isLoading ? (
                <div className="w-24 h-8 bg-gray-200 rounded-md animate-pulse"></div>
              ) : user ? (
                <div onClick={handleLogout} className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-gray-100">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </div>
                  <span className="text-sm font-medium">{user.firstName} {user.lastName}</span>
                  <FaChevronDown className="text-xs text-gray-500" />
                </div>
              ) : (
                <button onClick={() => router.push('/login')} className="text-sm font-medium text-indigo-600 hover:underline">
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
