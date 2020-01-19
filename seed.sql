INSERT INTO department (name)
VALUES ("Finacials");
INSERT INTO department (name)
VALUES ("Operations");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Engineers");

INSERT INTO role (title, salary, department_id)
VALUES ("Operations Manager", 83000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Java Developer", 60000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Full Stack Developer", 120000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Specialist", 75000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Alex", "Garcia", 4)