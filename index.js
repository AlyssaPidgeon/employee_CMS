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
//Add - addNewDepartment as reference function:
//let name = ?;
function addNewDepartment() {
  prompt([
    { type: "input", message: "Enter department name", name: "department" },
  ]).then((department) => {
    db.addDepartment(department);
  });
  // .then(() => selectOption());
}

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
        addRole();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE_EMPLOYEE":
        updateEmployee();
        break;
    }
  });
}

selectOption();
