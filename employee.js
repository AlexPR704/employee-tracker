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