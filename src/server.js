const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
const pool = new Pool({
  user: 'user',           // From the connection settings image
  host: 'localhost',
  database: 'database',   // From the connection settings image
  password: 'password',   // As specified
  port: 5432             // Standard PostgreSQL port
});

// Test database connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT current_database(), current_user');
    res.json({
      success: true,
      database: result.rows[0].current_database,
      user: result.rows[0].current_user,
      message: 'Database connection successful!'
    });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Basic API health check
app.get('/', (req, res) => {
  res.json({
    message: 'API is working',
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Test the database connection at: http://localhost:${PORT}/test-db');
});