const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

// Route to get all employees
router.get('/employees', employeeController.getAllEmployees);

// Route to create a new employee
router.post('/employees', employeeController.createEmployee);

// Route to get an employee by ID
router.get('/employees/:eid', employeeController.getEmployeeById);

// Route to update an employee
router.put('/employees/:eid', employeeController.updateEmployee);

// Route to delete an employee
router.delete('/employees', employeeController.deleteEmployee);

module.exports = router;
