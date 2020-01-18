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
function allEmployees() {
  var query = "SELECT * FROM employee  INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id";
  connection.query(query, function (err, res) {

    console.log('id      first_name      last_name      title     department      salary      manager')
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id.toString().padEnd(5), res[i].first_name.padEnd(5), res[i].last_name.padEnd(5), res[i].title.padEnd(5), res[i].name.padEnd(5), res[i].salary.toString().padEnd(5), res[i].manager_id.toString().padEnd(5))
      // The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

    }
    runSearch();
  });
}