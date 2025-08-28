import { FaCalendarAlt, FaPlus, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

export default function Calendar() {
  const events = [
    {
      id: 1,
      title: 'Mathematics Exam',
      date: '2024-01-15',
      time: '10:00 AM',
      location: 'Room 101',
      type: 'exam'
    },
    {
      id: 2,
      title: 'Science Project Due',
      date: '2024-01-18',
      time: '11:59 PM',
      location: 'Online',
      type: 'assignment'
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      date: '2024-01-20',
      time: '2:00 PM',
      location: 'Main Hall',
      type: 'meeting'
    }
  ];

  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaCalendarAlt className="text-3xl text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Calendar</h1>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-indigo-700">
            <FaPlus />
            <span>Add Event</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Calendar View</h2>
              <div className="bg-gray-50 rounded-lg h-96 flex items-center justify-center">
                <p className="text-gray-500">Calendar component will be implemented here</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="font-semibold text-gray-800">{event.title}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-xs" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaClock className="text-xs" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-xs" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}