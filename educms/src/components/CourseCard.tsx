import { FaUsers, FaCalendarAlt } from 'react-icons/fa';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  students: number;
  schedule: string;
  status: 'Active' | 'Ongoing' | 'New';
  badge?: 'New' | 'Popular';
}

export default function CourseCard({ 
  title, 
  description, 
  image, 
  students, 
  schedule, 
  status, 
  badge 
}: CourseCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'New':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'New':
        return 'bg-indigo-600 text-white';
      case 'Popular':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="course-card bg-white border border-gray-200 rounded-lg overflow-hidden transition duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        {badge && (
          <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${getBadgeColor(badge)}`}>
            {badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg">{title}</h4>
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center text-gray-500">
            <FaUsers className="mr-1" />
            <span>{students} Students</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaCalendarAlt className="mr-1" />
            <span>{schedule}</span>
          </div>
        </div>
      </div>
    </div>
  );
}