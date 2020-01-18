DROP DATABASE IF EXISTS employee_trackerDB;

-- Creates the database
CREATE database employee_trackerDB;

USE employee_trackerDB;
-- creating table department
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);
-- creating title(role) table
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);
-- creating table of employees
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(role_id) REFERENCES role(id)
);





-- SELECT * FROM employee;
-- select * from title;
-- select * from department;