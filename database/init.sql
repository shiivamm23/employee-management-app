CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;

CREATE TABLE employees(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 department VARCHAR(100),
 salary INT
);

INSERT INTO employees(name,department,salary)
VALUES
('Shivam','DevOps',50000),
('Rahul','Cloud',60000);