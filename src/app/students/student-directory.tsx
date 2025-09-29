"use client";
import { useState, useEffect } from 'react';
import { FaUsers, FaPlus, FaSearch, FaEye, FaEdit, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All Students');

  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch('http://localhost:3001/api/users');
        const data = await response.json();
        const studentUsers = data.filter(user => user.role === 'STUDENT');
        setStudents(studentUsers);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    }
    fetchStudents();
  }, []);

  const filters = ['All Students', 'ACTIVE', 'INACTIVE', 'GRADUATE'];

  const getStatusClass = (status) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800';
      case 'INACTIVE':
        return 'bg-gray-100 text-gray-800';
      case 'GRADUATE':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredStudents = students.filter(student => {
    if (activeFilter === 'All Students') return true;
    return student.studentProfile?.status === activeFilter;
  });

  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaUsers className="text-3xl text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Students</h1>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
            <FaPlus />
            <span>Add Student</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg capitalize ${activeFilter === filter ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                {filter.toLowerCase().replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {student.firstName.charAt(0)}{student.lastName.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{student.firstName} {student.lastName}</h3>
                    {student.studentProfile && (
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(student.studentProfile.status)}`}>
                        {student.studentProfile.status}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaEnvelope className="mr-2" />
                    <span className="truncate">{student.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaGraduationCap className="mr-2" />
                    <span>{student.enrollments.length} courses enrolled</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 text-sm flex items-center justify-center">
                    <FaEye className="mr-1" />
                    View
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    <FaEdit />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}