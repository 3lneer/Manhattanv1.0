import CourseCard from './CourseCard';

export default function RecentCourses() {
  const courses = [
    {
      title: "Advanced Mathematics",
      description: "Master advanced mathematical concepts and problem-solving techniques.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      students: 48,
      schedule: "Mon/Wed",
      status: "Active" as const,
      badge: "New" as const
    },
    {
      title: "Computer Science 101",
      description: "Introduction to programming, algorithms, and computer systems.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      students: 72,
      schedule: "Tue/Thu",
      status: "Ongoing" as const
    },
    {
      title: "World Literature",
      description: "Explore classic and contemporary works from around the world.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      students: 36,
      schedule: "Mon/Fri",
      status: "Active" as const,
      badge: "Popular" as const
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Recent Courses</h3>
        <button className="text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}