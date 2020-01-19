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
      name: "create",
      type: "list",
      message: "Create a [Department], a [Role] or [Employee] or [View] the following.",
            choices: ["Department", "Role", "Employee", "View"]
        })
        .then(function(promtAnswers){
            if (promtAnswers.create === "Department") {
                addDepartment();
            }
            else if(promtAnswers.create === "Role") {
                addRole();
            }
            else if(promtAnswers.create === "Employee") {
                addEmployee();
            }
            else if(promtAnswers.create === "View") {
                viewData();
            }
            else{
                connection.end();
            }
        })
}
function addDepartment() {
    inquirer
      .prompt([
        {
          name: "division",
          type: "input",
          message: "What department do you want to add?",
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.division
          },
          function(err) {
            if (err) throw err;
            console.log("Your department was added!");
            runSearch();
          }
        );
      });
  }

  function addRole() {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What title are you adding?",
        },
        {
          name: "salary",
          type: "input",
          message: "How much for the salary?",
        },
        {
          name: "departmentId",
          type: "input",
          message: "What departmentID are we adding?",
        }
      ])
      .then(function(answer) {

        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.department,
            salary: answer.salary,
            department_id: answer.departmentId
          },
          function(err) {
            if (err) throw err;
            console.log("Your role was added!");
            runSearch();
          }
        );
      });
  }

  function addEmployee() {
    inquirer
      .prompt([
        {
          name: "first",
          type: "input",
          message: "What is the first name?",
        },
        {
          name: "last",
          type: "input",
          message: "What is the last name?",
        },
        {
          name: "roleId",
          type: "input",
          message: "What role does the employee have?"
        },
        {
          name: "managerId",
          type: "input",
          message: "What is the managerID for this employee?",
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first,
            last_name: answer.last,
            role_id: answer.roleId,
            manager_id: answer.managerId
          },
          function(err) {
            if (err) throw err;
            console.log("Your employee was added!");
            runSearch();
          }
        );
      });
  }
  
  function viewData() {
    inquirer
      .prompt({
        name: "table",
        type: "list",
        message: "What table would you like to view?",
        choices: ["Department", "Role", "Employee"]
      })
      .then(function(answer) {
        if (answer.table === "Department") {
          viewDepartment();
        }
        else if(answer.table === "Role") {
          viewRole();
        } 
        else if(answer.table === "Employee") {
          viewEmployee();
        }
        else{
          connection.end();
        }
      });
  }

  function viewDepartment() {
    connection.query("SELECT * FROM department", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };
  
  function viewRole() {
    connection.query("SELECT * FROM role", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };
  
  function viewEmployee() {
    connection.query("SELECT * FROM employee", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };
