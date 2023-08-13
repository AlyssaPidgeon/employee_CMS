-- join department name into role table: department_id is relationship between both tables: 
SELECT role.id, role.title, role.salary, department.name
FROM role
JOIN name ON role.department_id = department.department_id;

-- join title, department, salary and manager to employee table: 

SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name
FROM employee
RIGHT JOIN title ON employee.role_id = role.role_id
RIGHT JOIN role ON employee.role_id = role.role_id
RIGHT JOIN name ON employee.department_id = department.department_id;
