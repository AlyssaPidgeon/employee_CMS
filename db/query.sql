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

SELECT employees.id, employees.first_name, employees.last_name, roles.salary AS salary
FROM employees, roles
LEFT JOIN salary ON employees.roles_id = roles_id;

SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title, roles.salary AS salary, department.names AS departments 
FROM employees, roles, department 
LEFT JOIN departments ON employees.department_id = department_id;

LEFT JOIN title ON employees.roles_id = roles_id 
LEFT JOIN salary ON employees.roles_id = roles.roles_id 


SELECT roles.id, roles.title, roles.salary, department.names AS department 
FROM roles 
LEFT JOIN department ON roles.department_id = department_id;

SELECT employees.manager_id, employees.first_name, employees.last_name
FROM employees
WHERE manager_id IS NOT NULL;
