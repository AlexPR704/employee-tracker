DROP DATABASE IF EXISTS employee_trackerDB;

-- Creates the database
CREATE database employee_trackerDB;

USE employee_trackerDB;
-- creating table department
CREATE TABLE department(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NULL
);
-- creating title(role) table
CREATE TABLE role(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(45) NULL,
  salary DECIMAL,
  department_id INT
);
-- creating table of employees
CREATE TABLE employee(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  role_id INT NULL,
  manager_id INT NULL
);




-- SELECT * FROM employee;
-- select * from title;
-- select * from department;