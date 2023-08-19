//mysql:
const connection = require("./connect.js");

//DB Class constructor

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  //employee table needs: job title, departments, salares adn amangers that employees report too

  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title, roles.salary AS salary, department.names AS department FROM employees LEFT JOIN roles ON employees.roles_id = roles_id LEFT JOIN department ON employees.roles_id = roles_id;"
      );
  }

  findAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT roles.id, roles.title, roles.salary, department.names AS department FROM roles LEFT JOIN department ON roles.department_id = department_id"
      );
  }

  //insert data row into department table
  addDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }
  //name and salary-roles db, dedpartment = department db
  addRole(roles) {
    return this.connection.promise().query("INSERT INTO roles SET ?", roles);
  }

  addEmployee(employees) {
    return this.connection
      .promise()
      .query("INSERT INTO employees SET ?", employees);
  }
  viewManagers() {
    return this.connection
      .promise()
      .query(
        "SELECT employees.manager_id, employees.first_name, employees.last_name FROM employees WHERE manager_id IS NOT NULL;"
      );
  }
}

module.exports = new DB(connection);
