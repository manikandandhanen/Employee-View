const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();

router.get("/", employeeController.getAllEmployees);
router.post("/", employeeController.addEmployee);

// Add other routes like PUT, DELETE, etc.

module.exports = router;
