import { FaArrowUp, FaArrowDown, FaUsers, FaBook, FaTasks, FaEnvelope } from 'react-icons/fa';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: string;
  iconBg: string;
  iconColor: string;
}

function StatCard({ title, value, change, changeType, icon, iconBg, iconColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <p className={`text-sm mt-2 flex items-center ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
            {changeType === 'increase' ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
            {change}
          </p>
        </div>
        <div className={`p-3 rounded-full ${iconBg} ${iconColor}`}>
          {icon === 'fas fa-users' && <FaUsers className="text-xl" />}
          {icon === 'fas fa-book' && <FaBook className="text-xl" />}
          {icon === 'fas fa-tasks' && <FaTasks className="text-xl" />}
          {icon === 'fas fa-envelope' && <FaEnvelope className="text-xl" />}
        </div>
      </div>
    </div>
  );
}

export default function StatsCards() {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      change: "12% from last month",
      changeType: "increase" as const,
      icon: "fas fa-users",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      title: "Active Courses",
      value: "24",
      change: "3 new this month",
      changeType: "increase" as const,
      icon: "fas fa-book",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Assignments Due",
      value: "18",
      change: "5 overdue",
      changeType: "decrease" as const,
      icon: "fas fa-tasks",
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      title: "Messages",
      value: "32",
      change: "8 unread",
      changeType: "increase" as const,
      icon: "fas fa-envelope",
      iconBg: "bg-green-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}