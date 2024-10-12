# Assignment 1 , build using nodeJS and express, it has signup,login for user and user can add employee, get employee detials , can update also delete employee as well

# My API Project
This project is a Node.js API for user authentication and employee management, built with Express and MongoDB, and deployed on Vercel.

# Features
User signup and login with JWT-based authentication.
CRUD operations for managing employees.
Data validation using express-validator.
API tested with Postman.
Technologies
Node.js, Express
MongoDB (Mongoose)
JSON Web Tokens (JWT)
express-validator
Vercel (Deployment)
Installation
Clone the repo:

```bash
git clone https://github.com/Milan-p23/101397631_COMP3123_Assignment1
Navigate to the project directory:
```
```bash
cd your-repo
Install dependencies:
```
```bash
npm install
Set up .env file with:
```
makefile
DB_CONNECTION=<your-database-connection>
JWT_SECRET=<your-secret>
Start the server:

npm start

API Endpoints:

POST /api/v1/user/signup: Create a new user.

POST /api/v1/user/login: Log in a user.

GET /api/v1/emp/employees: Get a list of employees.

POST /api/v1/emp/employees: Add a new employee.

GET /api/v1/emp/employees/:id: Get details of an employee by ID.

POST /api/v1/emp/employees?eid=xxx: Delete employee by ID.

PUT /api/v1/emp/employees/{eid}: To update employee details using ID.


# License
This project is licensed under the MIT License.

