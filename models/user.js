const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database.js');
 // Import your Sequelize instance

const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
});



// Sync the model with the database (create the table)
(async () => {
  try {
    await sequelize.sync();
    console.log( 'User Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})()

module.exports = User;
