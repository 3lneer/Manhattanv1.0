# EduCMS - Educational Platform

A modern educational management system built with React, Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dashboard Overview**: Complete statistics and metrics display
- **Course Management**: Visual course cards with enrollment data
- **Student Management**: Track student progress and activities
- **Event Management**: Upcoming events and calendar integration
- **Activity Feed**: Real-time activity tracking
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Clean, professional interface with Tailwind CSS

## Technology Stack

- **Frontend**: React 19, Next.js 15.5.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Font Awesome 7.0.0
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd educms
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Runs the app in development mode with Turbopack
- `npm run build` - Builds the app for production with Turbopack
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint for code quality

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home dashboard page
└── components/
    ├── Layout.tsx       # Main layout with sidebar and header
    ├── Sidebar.tsx      # Navigation sidebar
    ├── Header.tsx       # Top navigation header
    ├── StatsCards.tsx   # Dashboard statistics cards
    ├── CourseCard.tsx   # Individual course card component
    ├── RecentCourses.tsx # Recent courses section
    ├── UpcomingEvents.tsx # Upcoming events section
    └── RecentActivity.tsx # Recent activity feed
```

## Key Components

### Layout Components
- **Layout**: Main layout wrapper with sidebar and responsive design
- **Sidebar**: Navigation menu with search and menu sections
- **Header**: Top navigation with user profile and notifications

### Dashboard Components
- **StatsCards**: Key metrics display (students, courses, assignments, messages)
- **RecentCourses**: Grid of course cards with enrollment data
- **UpcomingEvents**: List of scheduled events with time information
- **RecentActivity**: Activity feed showing user interactions

## Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Collapsible sidebar on mobile devices
- Touch-friendly interface
- Adaptive grid layouts

## Customization

### Styling
- Custom CSS classes in `globals.css`
- Tailwind CSS utilities for rapid development
- Consistent color scheme with indigo primary colors

### Adding New Features
1. Create new components in the `components/` directory
2. Import and use in the main page or layout
3. Follow existing TypeScript interfaces for props

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.