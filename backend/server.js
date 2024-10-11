const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Database123!',
  database: 'test',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM user';
    console.log('Executing query:', query); 
    db.query(query, (err, results) => {
      if (err) {
        console.error('Query Error:', err); 
        return res.status(500).json({ error: 'Database error' });
      }
      console.log('Query results:', results); 
      res.json(results);
    });
  });
  

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
  
    const query = 'SELECT * FROM user WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error('Query Error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (results.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });

// User registration
app.post('/api/register', (req, res) => {
    const { email, password } = req.body;
    const query = 'INSERT INTO user (email, password) VALUES (?, ?)';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Query Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
