interface ActivityProps {
  userName: string;
  userImage: string;
  action: string;
  target: string;
  time: string;
  isOnline: boolean;
}

function ActivityItem({ userName, userImage, action, target, time, isOnline }: ActivityProps) {
  return (
    <div className="flex items-start">
      <div className="relative mr-3">
        <img src={userImage} alt={userName} className="w-10 h-10 rounded-full" />
        <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${isOnline ? 'bg-green-500' : 'bg-gray-300'}`}></span>
      </div>
      <div>
        <p className="text-sm">
          <span className="font-medium">{userName}</span> {action} <span className="font-medium">{target}</span>
        </p>
        <p className="text-gray-500 text-xs mt-1">{time}</p>
      </div>
    </div>
  );
}

export default function RecentActivity() {
  const activities = [
    {
      userName: "Michael Brown",
      userImage: "https://randomuser.me/api/portraits/men/32.jpg",
      action: "submitted assignment",
      target: "Math Homework #5",
      time: "2 hours ago",
      isOnline: true
    },
    {
      userName: "You",
      userImage: "https://randomuser.me/api/portraits/women/44.jpg",
      action: "created a new course",
      target: "Introduction to Biology",
      time: "5 hours ago",
      isOnline: true
    },
    {
      userName: "David Wilson",
      userImage: "https://randomuser.me/api/portraits/men/75.jpg",
      action: "commented on",
      target: "English Essay",
      time: "Yesterday",
      isOnline: false
    },
    {
      userName: "Emily Chen",
      userImage: "https://randomuser.me/api/portraits/women/68.jpg",
      action: "enrolled in",
      target: "Computer Science 101",
      time: "2 days ago",
      isOnline: true
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <button className="text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
}