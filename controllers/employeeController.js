const employeeService = require("../services/employeeService");

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.render("employees", { employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    await employeeService.addEmployee(req.body);
    res.redirect("/employees");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Similarly add other methods like updateEmployee, getEmployeeById, etc.
