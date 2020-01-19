INSERT INTO department (name)
VALUES ("Finacials");
INSERT INTO department (name)
VALUES ("Operations");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Operations Manager", 83000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 60000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Specialist", 75000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Alex", "Garcia", 1)