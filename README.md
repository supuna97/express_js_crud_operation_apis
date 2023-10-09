## REST APIS crud operations with MVC Design Pattern with NodeJS Express and Mysql

### Description
- This is a simple REST API with CRUD operations using NodeJS Express and Mysql.

### Features
- MVC Design Pattern
- REST API
- CRUD operations
- Mysql database

### Using technology
- Expressjs, Mysql, nodemon

### How to run
- npm install
- npm start

### How to use
- Create a database named `ejs_crud`
- Change database configuration from `config/database.js` file
- Run `npm start` command
- Open browser and hit `http://localhost:3000/`

### Available routes
- GET    /v1/user
- POST   /v1/user/create
- PUT    /v1/user/update/:id
- DELETE /v1/user/delete/:id
