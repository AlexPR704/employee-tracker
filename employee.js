var mysql = require("mysql");
var inquirer = require("inquirer");
//connection to the host
var connection = mysql.createConnection({
  host: "localhost",

  // Your port.
  port: 3306,

  // Your username.
  user: "root",

  // Your password.
  password: "12345678",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by manager",
        "Add an employee",
        "Remove an employee",
        "Update employee's role",
        "Update employee's manager"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View all employees":
        allEmployees();
        break;

      case "View all employees by department":
        employeesDepartment();
        break;

      case "View all employees by manager":
        employeesManager();
        break;

      case "Add an employee":
        addEmployee();
        break;

      case "Remove an employee":
        removeEmployee();
        break;

        case "Update an employee's role":
        updateRole();
        break;

        case "Update an employee's manager":
        updateManager();
        break;
      }
    });
}