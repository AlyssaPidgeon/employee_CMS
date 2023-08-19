const inquirer = require("inquirer");
const mysql = require("mysql2");
// const express = require("express");

// const PORT = process.env.PORT || 3001;

// //middleware code:
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

//connect to DB using mysql2:
//promise() on connection to allow asyn/await syntax:
const db = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "abcd",
    database: "employee_db",
  })
  .promise();

//query -

// connection.execute(
//   "SELECT * FROM 'department' WHERE 'name' = ? AND 'id' = ?",
//   function (err, results, fields) {
//     console.log(results);
//     console.log(fields);
//   }
// );

// const viewDepartments = async () => {
//   const departmentQuery = "SELECT * FROM department;";
//   const department = await connection.query(departmentQuery);
//   return departments[0];
// };

// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });
