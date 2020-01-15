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
        "View all departments",
        "View all employees by department",
        "View all roles by employees",
        "Add a department",
        "Add an employee",
        "Add a role to employee"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Find songs by artist":
        artistSearch();
        break;

      case "Find all artists who appear more than once":
        multiSearch();
        break;

      case "Find data within a specific range":
        rangeSearch();
        break;

      case "Search for a specific song":
        songSearch();
        break;

      case "Find artists with a top song and top album in the same year":
        songAndAlbumSearch();
        break;
      }
    });
}