import { FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function Analytics() {
  const stats = [
    { title: 'Total Students', value: '1,234', change: '+12%', trending: 'up' },
    { title: 'Active Courses', value: '56', change: '+8%', trending: 'up' },
    { title: 'Completion Rate', value: '89%', change: '-2%', trending: 'down' },
    { title: 'Average Grade', value: '8.7/10', change: '+5%', trending: 'up' },
  ];

  return (
    <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <FaChartLine className="text-3xl text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`flex items-center ${stat.trending === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trending === 'up' ? <FaArrowUp /> : <FaArrowDown />}
                  <span className="text-sm font-medium ml-1">{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Student Enrollment Trend</h2>
            <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Enrollment chart will be implemented here</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Course Performance</h2>
            <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Performance chart will be implemented here</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Top Performing Courses</h2>
            <div className="space-y-3">
              {['Mathematics', 'Science', 'History', 'Literature'].map((course, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{course}</span>
                  <span className="text-green-600 font-semibold">{95 - index * 3}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Student Activity</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Daily Active Users</span>
                <span className="font-semibold">892</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Assignments Submitted</span>
                <span className="font-semibold">147</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Forum Posts</span>
                <span className="font-semibold">23</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
            <div className="space-y-3 text-sm">
              <div className="text-green-600">📈 Student enrollment increased by 12%</div>
              <div className="text-blue-600">🎯 Course completion rate improved</div>
              <div className="text-purple-600">⭐ New high score in Mathematics</div>
              <div className="text-orange-600">📚 50+ new courses added</div>
            </div>
          </div>
        </div>
      </div>
  );
}