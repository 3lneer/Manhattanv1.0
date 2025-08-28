import { FaChalkboardTeacher, FaPlus, FaSearch, FaEye, FaEdit, FaBook, FaEnvelope, FaPhone, FaStar } from 'react-icons/fa';

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      email: 'sarah.smith@school.edu',
      phone: '+1 (555) 123-4567',
      department: 'Mathematics',
      courses: 3,
      students: 85,
      rating: 4.8,
      status: 'Active',
      avatar: 'SS',
      experience: '12 years'
    },
    {
      id: 2,
      name: 'Prof. Michael Johnson',
      email: 'michael.johnson@school.edu',
      phone: '+1 (555) 234-5678',
      department: 'Physics',
      courses: 2,
      students: 67,
      rating: 4.6,
      status: 'Active',
      avatar: 'MJ',
      experience: '8 years'
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      email: 'emily.williams@school.edu',
      phone: '+1 (555) 345-6789',
      department: 'History',
      courses: 4,
      students: 102,
      rating: 4.9,
      status: 'On Leave',
      avatar: 'EW',
      experience: '15 years'
    },
    {
      id: 4,
      name: 'Ms. Lisa Davis',
      email: 'lisa.davis@school.edu',
      phone: '+1 (555) 456-7890',
      department: 'Computer Science',
      courses: 3,
      students: 78,
      rating: 4.7,
      status: 'Active',
      avatar: 'LD',
      experience: '6 years'
    },
    {
      id: 5,
      name: 'Dr. James Wilson',
      email: 'james.wilson@school.edu',
      phone: '+1 (555) 567-8901',
      department: 'Chemistry',
      courses: 2,
      students: 54,
      rating: 4.5,
      status: 'Active',
      avatar: 'JW',
      experience: '10 years'
    },
    {
      id: 6,
      name: 'Prof. Maria Garcia',
      email: 'maria.garcia@school.edu',
      phone: '+1 (555) 678-9012',
      department: 'Literature',
      courses: 3,
      students: 89,
      rating: 4.8,
      status: 'Active',
      avatar: 'MG',
      experience: '14 years'
    }
  ];

  const filters = ['All Teachers', 'Active', 'On Leave', 'Part-time'];

  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaChalkboardTeacher className="text-3xl text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Teachers</h1>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
            <FaPlus />
            <span>Add Teacher</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search teachers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`px-3 py-2 rounded-lg text-sm ${index === 0 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {teacher.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
                    <p className="text-sm text-gray-600">{teacher.department}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mt-1 ${
                      teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      teacher.status === 'On Leave' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {teacher.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaEnvelope className="mr-2" />
                    <span className="truncate">{teacher.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaPhone className="mr-2" />
                    <span>{teacher.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaBook className="mr-2" />
                    <span>{teacher.courses} courses, {teacher.students} students</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaStar className="mr-2 text-yellow-500" />
                    <span>{teacher.rating}/5.0 rating</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-gray-600">Experience: </span>
                  <span className="text-sm font-semibold text-gray-800">{teacher.experience}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 text-sm flex items-center justify-center">
                    <FaEye className="mr-1" />
                    View Profile
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    <FaEdit />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Teacher Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">47</div>
                <div className="text-gray-600">Total Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">42</div>
                <div className="text-gray-600">Active Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">3</div>
                <div className="text-gray-600">On Leave</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.7</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Top Rated Teachers</h2>
            <div className="space-y-3">
              {teachers.slice(0, 4).sort((a, b) => b.rating - a.rating).map((teacher) => (
                <div key={teacher.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {teacher.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{teacher.name}</div>
                      <div className="text-sm text-gray-600">{teacher.department}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    <span className="font-semibold">{teacher.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}