import Layout from '@/components/Layout';
import StatsCards from '@/components/StatsCards';
import RecentCourses from '@/components/RecentCourses';
import UpcomingEvents from '@/components/UpcomingEvents';
import RecentActivity from '@/components/RecentActivity';

export default function Home() {
  return (
    <Layout>
      {/* Stats Cards */}
      <StatsCards />

      {/* Recent Courses */}
      <RecentCourses />

      {/* Upcoming Events & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <div className="lg:col-span-2">
          <UpcomingEvents />
        </div>
        
        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </Layout>
  );
}
