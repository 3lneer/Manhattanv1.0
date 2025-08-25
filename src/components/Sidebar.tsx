'use client';

import { useState } from 'react';
import { 
  FaGraduationCap, 
  FaSearch, 
  FaHome, 
  FaCalendarAlt, 
  FaChartLine, 
  FaBook, 
  FaUsers, 
  FaChalkboardTeacher, 
  FaTasks, 
  FaCog, 
  FaBell 
} from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div className={`sidebar w-64 bg-white shadow-lg fixed h-full overflow-y-auto z-40 ${isOpen ? 'open' : ''}`}>
      <div className="p-4 gradient-bg text-white">
        <div className="flex items-center space-x-3">
          <FaGraduationCap className="text-3xl" />
          <h1 className="text-2xl font-bold">EduCMS</h1>
        </div>
        <p className="text-indigo-100 mt-1">Education Management System</p>
      </div>
      
      <div className="p-4">
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        
        <nav>
          <div className="mb-6">
            <h3 className="text-xs uppercase font-semibold text-gray-500 mb-3">Dashboard</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg bg-indigo-50 text-indigo-700">
                  <FaHome className="w-6 text-center" />
                  <span>Overview</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                  <FaCalendarAlt className="w-6 text-center" />
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                  <FaChartLine className="w-6 text-center" />
                  <span>Analytics</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-semibold text-gray-500 mb-3">Education</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                  <FaBook className="w-6 text-center" />
                  <span>Courses</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                  <FaUsers className="w-6 text-center" />
                  <span>Students</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                  <FaChalkboardTeacher className="w-6 text-center" />
                  <span>Teachers</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                  <FaTasks className="w-6 text-center" />
                  <span>Assignments</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xs uppercase font-semibold text-gray-500 mb-3">Settings</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                  <FaCog className="w-6 text-center" />
                  <span>Account</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
                  <FaBell className="w-6 text-center" />
                  <span>Notifications</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}