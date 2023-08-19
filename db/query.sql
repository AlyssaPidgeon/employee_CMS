-- join department name into role table: department_id is relationship between both tables: 
SELECT roles.id, roles.title, roles.salary, department.names
FROM roles
JOIN names ON roles.department_id = department.department_id;

-- join title, department, salary and manager to employee table: 

SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title, roles.salary AS salary, department.names AS department
FROM employees
RIGHT JOIN title ON employees.roles_id = roles.roles_id
RIGHT JOIN salary ON employees.roles_id = roles.roles_id
RIGHT JOIN names ON employees.department_id = department.department_id;


UPDATE employees SET NAME = "" WHERE id = "";
