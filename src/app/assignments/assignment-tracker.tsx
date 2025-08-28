import { FaTasks, FaPlus, FaSearch, FaEye, FaEdit, FaCalendarAlt, FaClock, FaUsers, FaExclamationTriangle } from 'react-icons/fa';

export default function Assignments() {
  const assignments = [
    {
      id: 1,
      title: 'Mathematics Homework #5',
      course: 'Advanced Mathematics',
      dueDate: '2024-01-20',
      dueTime: '11:59 PM',
      submitted: 28,
      total: 35,
      status: 'Active',
      priority: 'Medium'
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Physics Fundamentals',
      dueDate: '2024-01-25',
      dueTime: '2:00 PM',
      submitted: 15,
      total: 42,
      status: 'Active',
      priority: 'High'
    },
    {
      id: 3,
      title: 'History Essay: World War II',
      course: 'World History',
      dueDate: '2024-01-18',
      dueTime: '11:59 PM',
      submitted: 38,
      total: 40,
      status: 'Due Soon',
      priority: 'High'
    },
    {
      id: 4,
      title: 'Programming Project',
      course: 'Computer Science Basics',
      dueDate: '2024-02-01',
      dueTime: '11:59 PM',
      submitted: 12,
      total: 31,
      status: 'Active',
      priority: 'Medium'
    },
    {
      id: 5,
      title: 'Chemistry Quiz #3',
      course: 'General Chemistry',
      dueDate: '2024-01-15',
      dueTime: '10:00 AM',
      submitted: 25,
      total: 25,
      status: 'Completed',
      priority: 'Low'
    },
    {
      id: 6,
      title: 'Literature Analysis',
      course: 'English Literature',
      dueDate: '2024-01-22',
      dueTime: '11:59 PM',
      submitted: 8,
      total: 33,
      status: 'Active',
      priority: 'Medium'
    }
  ];

  const filters = ['All Assignments', 'Active', 'Due Soon', 'Completed', 'Overdue'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-blue-100 text-blue-800';
      case 'Due Soon':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaTasks className="text-3xl text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Assignments</h1>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
            <FaPlus />
            <span>Create Assignment</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search assignments..."
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
          {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{assignment.title}</h3>
                  <div className="flex items-center space-x-1">
                    {assignment.priority === 'High' && <FaExclamationTriangle className={getPriorityColor(assignment.priority)} />}
                    <span className={`text-xs font-semibold ${getPriorityColor(assignment.priority)}`}>
                      {assignment.priority}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3">{assignment.course}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getStatusColor(assignment.status)}`}>
                  {assignment.status}
                </span>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaClock className="mr-2" />
                    <span>{assignment.dueTime}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaUsers className="mr-2" />
                    <span>{assignment.submitted}/{assignment.total} submitted</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-800 font-medium">
                      {Math.round((assignment.submitted / assignment.total) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 text-sm flex items-center justify-center">
                    <FaEye className="mr-1" />
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                    <FaEdit />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Assignment Statistics</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Assignments</span>
                <span className="text-2xl font-bold text-indigo-600">127</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Active</span>
                <span className="text-lg font-semibold text-blue-600">89</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Due Soon</span>
                <span className="text-lg font-semibold text-yellow-600">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Completed</span>
                <span className="text-lg font-semibold text-green-600">26</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Due Dates</h2>
            <div className="space-y-3">
              {assignments.filter(a => a.status === 'Due Soon' || a.status === 'Active').slice(0, 4).map((assignment) => (
                <div key={assignment.id} className="border-l-4 border-yellow-500 pl-3">
                  <h4 className="font-medium text-gray-800 text-sm">{assignment.title}</h4>
                  <p className="text-xs text-gray-600">{assignment.course}</p>
                  <p className="text-xs text-gray-500">{assignment.dueDate} at {assignment.dueTime}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Completion Overview</h2>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">78%</div>
                <div className="text-gray-600 text-sm">Average Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 mb-2">1,847</div>
                <div className="text-gray-600 text-sm">Total Submissions</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-600 mb-2">23</div>
                <div className="text-gray-600 text-sm">Pending Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}