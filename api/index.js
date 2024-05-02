import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Create MySQL connection
const connection = mysql.createConnection({
  host: "mysql-db", // Change this to your MySQL host
  user: "root", // Change this to your MySQL username
  password: "123456", // Change this to your MySQL password
  port: 3306, // Change this to your MySQL port if needed
});

// Connect to MySQL server
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL server");

  // Create database
  connection.query("CREATE DATABASE IF NOT EXISTS students", (err, result) => {
    if (err) {
      console.error("Error creating database:", err);
      return;
    }
    console.log("Database created successfully");

    // Use the 'students' database for subsequent queries
    connection.query("USE students", (err, result) => {
      if (err) {
        console.error("Error switching to database:", err);
        return;
      }
      console.log("Switched to the students database");

      // Create students table if it doesn't exist
      const createTableQuery = `
      CREATE TABLE IF NOT EXISTS students (
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        gpa DECIMAL(3, 2) NOT NULL,
        age INT NOT NULL
      )
    `;
      connection.query(createTableQuery, (err, result) => {
        if (err) {
          console.error("Error creating table:", err);
          return;
        }
        console.log("Table created successfully");
      });

      // Insert data
      const insertDataQuery = `
      INSERT IGNORE INTO students (id, name, gpa, age) VALUES 
      (22010036, 'Ahmed Mohamed Soliman', 3.14, 20), 
      (22010049, 'Eslam Mohamed Abo-elfadl ', 2.88, 20),
      (22010328, 'Hazem Ahmed Desoky', 3.37, 20), 
      (22010087, 'Khaled Karam Khamis', 2.9, 20),
      (22010259, 'Mostafa Mohamed Shehata', 3.55, 20)
    `;
      connection.query(insertDataQuery, (err, result) => {
        if (err) {
          console.error("Error inserting data:", err);
          return;
        }
        console.log("Data inserted successfully");
      });
    });
  });
});

app.get('/api/students', (req, res) => {
  connection.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('An error occurred while fetching data');
      return;
    }
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});