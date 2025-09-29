const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    await prisma.$connect();
    res.json({
      success: true,
      message: 'Database connection successful!'
    });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  } finally {
    await prisma.$disconnect();
  }
});

// Basic API health check
app.get('/', (req, res) => {
  res.json({
    message: 'API is working',
    timestamp: new Date()
  });
});

const bcrypt = require('bcrypt');

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        studentProfile: true,
        enrollments: true,
      },
    });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }

    // Don't send password hash to client
    const { passwordHash, ...userWithoutPassword } = user;

    res.json({ success: true, user: userWithoutPassword });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'An error occurred during login.' });
  }
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  if (!firstName || !lastName || !email || !password || !role) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  if (role !== 'STUDENT' && role !== 'TEACHER') {
    return res.status(400).json({ success: false, message: 'Invalid role specified.' });
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ success: false, message: 'An account with this email already exists.' });
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create user and profile in a transaction
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash,
        role,
        ...(role === 'STUDENT' && { 
          studentProfile: { create: {} } // Create a student profile with default status
        }),
        ...(role === 'TEACHER' && { 
          teacherProfile: { create: {} } // Create a teacher profile with default status
        }),
      },
      include: {
        studentProfile: true,
        teacherProfile: true,
      }
    });

    const { passwordHash: _, ...userWithoutPassword } = user;

    res.status(201).json({ success: true, user: userWithoutPassword });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'An error occurred during registration.' });
  }
});


// Get user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        studentProfile: true,
        teacherProfile: true,
        enrollments: { include: { course: true } },
        submissions: { include: { assignment: true } },
      },
    });
    if (user) {
      const { passwordHash, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        teacher: {
          select: { firstName: true, lastName: true, email: true }
        },
        enrollments: { 
          select: { student: { select: { id: true, firstName: true, lastName: true } } }
        },
      },
    });
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get course by ID
app.get('/api/courses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        teacher: {
          select: { firstName: true, lastName: true, email: true }
        },
        enrollments: {
          include: { student: { select: { id: true, firstName: true, lastName: true } } }
        },
        assignments: true,
      },
    });
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ success: false, message: 'Course not found' });
    }
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Test the database connection at: http://localhost:${PORT}/test-db');
  console.log('Please ensure you have a .env file with the DATABASE_URL for Prisma.');
});
