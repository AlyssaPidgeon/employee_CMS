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
        "SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, department.names FROM employees RIGHT JOIN title ON employees.roles_id = roles.roles_id RIGHT JOIN salary ON employees.roles_id = roles.roles_id RIGHT JOIN names ON employees.department_id = department.department_id;"
      );
  }

  findAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  //roles table needs department column from department table (?join)

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
}

module.exports = new DB(connection);
