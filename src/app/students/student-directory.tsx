import { FaUsers, FaPlus, FaSearch, FaEye, FaEdit, FaGraduationCap, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Students() {
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@email.com',
      phone: '+1 (555) 123-4567',
      grade: 'A',
      courses: 4,
      status: 'Active',
      avatar: 'AJ'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@email.com',
      phone: '+1 (555) 234-5678',
      grade: 'B+',
      courses: 3,
      status: 'Active',
      avatar: 'BS'
    },
    {
      id: 3,
      name: 'Carol Williams',
      email: 'carol@email.com',
      phone: '+1 (555) 345-6789',
      grade: 'A-',
      courses: 5,
      status: 'Inactive',
      avatar: 'CW'
    },
    {
      id: 4,
      name: 'David Brown',
      email: 'david@email.com',
      phone: '+1 (555) 456-7890',
      grade: 'B',
      courses: 3,
      status: 'Active',
      avatar: 'DB'
    },
    {
      id: 5,
      name: 'Emma Davis',
      email: 'emma@email.com',
      phone: '+1 (555) 567-8901',
      grade: 'A+',
      courses: 6,
      status: 'Active',
      avatar: 'ED'
    },
    {
      id: 6,
      name: 'Frank Miller',
      email: 'frank@email.com',
      phone: '+1 (555) 678-9012',
      grade: 'C+',
      courses: 2,
      status: 'Active',
      avatar: 'FM'
    }
  ];

  const filters = ['All Students', 'Active', 'Inactive', 'Graduated'];

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
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${index === 0 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div key={student.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {student.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {student.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaEnvelope className="mr-2" />
                    <span className="truncate">{student.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaPhone className="mr-2" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaGraduationCap className="mr-2" />
                    <span>{student.courses} courses enrolled</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Current Grade:</span>
                  <span className={`font-semibold ${
                    student.grade.includes('A') ? 'text-green-600' :
                    student.grade.includes('B') ? 'text-blue-600' :
                    'text-orange-600'
                  }`}>
                    {student.grade}
                  </span>
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

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Student Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">1,234</div>
              <div className="text-gray-600">Total Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1,186</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">48</div>
              <div className="text-gray-600">Inactive Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8.7</div>
              <div className="text-gray-600">Average Grade</div>
            </div>
          </div>
        </div>
      </div>
  );
}