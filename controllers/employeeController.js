const Employee = require('../models/employee');

// Get All Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ status: false, message: 'Error fetching employees', error: err.message });
  }
};

// Create New Employee
exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully.', employee_id: newEmployee._id });
  } catch (err) {
    res.status(500).json({ status: false, message: 'Error creating employee', error: err.message });
  }
};

// Get Employee Details by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);
    if (!employee) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ status: false, message: 'Error fetching employee', error: err.message });
  }
};

// Update Employee Details
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee details updated successfully.' });
  } catch (err) {
    res.status(500).json({ status: false, message: 'Error updating employee', error: err.message });
  }
};

// Delete Employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.query.eid);
    if (!employee) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully.' });
  } catch (err) {
    res.status(500).json({ status: false, message: 'Error deleting employee', error: err.message });
  }
};
