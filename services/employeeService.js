const Employee = require("../models/Employee");

exports.getAllEmployees = async () => {
  return await Employee.findAll();
};

exports.addEmployee = async (employeeData) => {
  return await Employee.create(employeeData);
};

// Add other service methods like updateEmployee, getEmployeeById, etc.
