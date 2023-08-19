const { prompt } = require("inquirer");
const db = require("./db");

function viewEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => selectOption());
}

function viewRoles() {
  db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
    })
    .then(() => selectOption());
}

function viewDepartment() {
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
    })
    .then(() => selectOption());
}

function addNewDepartment() {
  prompt([
    { type: "input", message: "Enter department name", name: "department" },
  ])
    .then((department) => {
      db.addDepartment(department);
    })
    .then(() => selectOption());
}

function addNewRole() {
  prompt([
    {
      type: "input",
      message: "Enter the new role to be added",
      name: "new_role",
    },
  ]).then((new_role) => {
    db.addRole(new_role);
  });
}

// function addNewEmployee() {
//   prompt([
//     {
//       type: "input",
//       message: "Enter the new employee's first name",
//       name: "first_name",
//     },
//     {
//       type: "input",
//       message: "Enter the new employee's surname",
//       name: "surname",
//     },
//     {
//       type: "input",
//       message: "Enter the employee's role ",
//       name: "new_role",
//     },
//     {
//       type: "input",
//       message: "Enter the employee's manager",
//       name: "manager",
//     },
//     ]).then((first_name, surname, new_role, manager) => {
//       db.addEmployee(first_name, surname, new_role, manager);
//     }
// }
function updateEmployee() {}

function selectOption() {
  prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "option",
      choices: [
        {
          name: "View all departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View all roles",
          value: "VIEW_ROLES",
        },
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "Add a department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Add a role",
          value: "ADD_ROLE",
        },
        {
          name: "Add a employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update an employee role",
          value: "UPDATE_EMPLOYEE",
        },
      ],
    },
  ]).then((answer) => {
    switch (answer.option) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "VIEW_DEPARTMENTS":
        viewDepartment();
        break;
      case "ADD_DEPARTMENT":
        addNewDepartment();
        break;
      case "ADD_ROLE":
        addNewRole();
        break;
      case "ADD_EMPLOYEE":
        addNewEmployee();
        break;
      case "UPDATE_EMPLOYEE":
        updateEmployee();
        break;
    }
  });
}

selectOption();
