
const { Sequelize } = require('sequelize');

// Replace these values with your actual database credentials
const sequelize = new Sequelize('blogsManagement', 'postgres', '123456789', {
  host: 'localhost', 
  port: 5432, // Change to your database server host
  dialect: 'postgres',  // Use your database dialect (e.g., 'mysql' for MySQL, 'sqlite' for SQLite)
});

module.exports = sequelize;
