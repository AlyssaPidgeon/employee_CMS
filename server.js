const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");

const PORT = process.env.PORT || 3001;

//middleware code:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to DB:
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "abcd",
    database: "employee_db",
  },
  console.log("Connected to the employee_db database.")
);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
