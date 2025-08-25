import { FaChalkboardTeacher, FaGraduationCap, FaUsers, FaClock, FaEllipsisV } from 'react-icons/fa';

interface EventProps {
  title: string;
  description: string;
  time: string;
  icon: string;
  iconBg: string;
  iconColor: string;
}

function EventItem({ title, description, time, icon, iconBg, iconColor }: EventProps) {
  return (
    <div className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
      <div className={`${iconBg} ${iconColor} p-2 rounded-lg mr-4`}>
        {icon === 'fas fa-chalkboard-teacher' && <FaChalkboardTeacher className="text-lg" />}
        {icon === 'fas fa-graduation-cap' && <FaGraduationCap className="text-lg" />}
        {icon === 'fas fa-users' && <FaUsers className="text-lg" />}
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <FaClock className="mr-1" />
          <span>{time}</span>
        </div>
      </div>
      <button className="text-indigo-600 hover:text-indigo-800">
        <FaEllipsisV />
      </button>
    </div>
  );
}

export default function UpcomingEvents() {
  const events = [
    {
      title: "Faculty Meeting",
      description: "Quarterly review and planning session",
      time: "Today, 2:00 PM - 4:00 PM",
      icon: "fas fa-chalkboard-teacher",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      title: "Graduation Ceremony",
      description: "Class of 2023 graduation event",
      time: "June 15, 10:00 AM - 12:00 PM",
      icon: "fas fa-graduation-cap",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Parent-Teacher Conference",
      description: "Discuss student progress with parents",
      time: "June 20, 9:00 AM - 5:00 PM",
      icon: "fas fa-users",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Upcoming Events</h3>
        <button className="text-indigo-600 hover:text-indigo-800 font-medium">View Calendar</button>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <EventItem key={index} {...event} />
        ))}
      </div>
    </div>
  );
}