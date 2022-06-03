const readline = require("readline-sync");

let employees = [];
function Employees(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    employees.push(this);
    this.printEmployeeForm();
};

Employees.prototype.printEmployeeForm = function() {
    console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.Salary + ", " + "Status: " + this.status);
};

var melissa = new Employees("Melissa", "Assistant Operations Manager", 60000, "Part Time");
var alan = new Employees("Alan", "Operations Manager", 70000);
var jeff = new Employees("Jeff", "Accountant", 80000);
console.log(employees);