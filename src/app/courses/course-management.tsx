import { FaBook, FaPlus, FaSearch, FaUsers, FaClock, FaStar } from 'react-icons/fa';

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      instructor: 'Dr. Smith',
      students: 28,
      duration: '12 weeks',
      rating: 4.8,
      status: 'Active',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      instructor: 'Prof. Johnson',
      students: 35,
      duration: '10 weeks',
      rating: 4.6,
      status: 'Active',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'World History',
      instructor: 'Dr. Williams',
      students: 42,
      duration: '8 weeks',
      rating: 4.7,
      status: 'Completed',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Computer Science Basics',
      instructor: 'Ms. Davis',
      students: 31,
      duration: '14 weeks',
      rating: 4.9,
      status: 'Active',
      color: 'bg-orange-500'
    }
  ];

  const categories = ['All Courses', 'Active', 'Completed', 'Upcoming'];

  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaBook className="text-3xl text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
            <FaPlus />
            <span>Add Course</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${index === 0 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className={`${course.color} h-32 rounded-t-lg flex items-center justify-center`}>
                <FaBook className="text-4xl text-white" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{course.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    course.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    course.status === 'Completed' ? 'bg-gray-100 text-gray-800' : 
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {course.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">by {course.instructor}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaUsers className="mr-2" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaClock className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaStar className="mr-2 text-yellow-500" />
                    <span>{course.rating}/5.0</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 text-sm">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Course Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24</div>
              <div className="text-gray-600">Total Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">18</div>
              <div className="text-gray-600">Active Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">136</div>
              <div className="text-gray-600">Total Students</div>
            </div>
          </div>
        </div>
      </div>
  );
}