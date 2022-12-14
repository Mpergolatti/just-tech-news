const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create our User Model
class User extends Model {}

// Define Table Columns and Configuration
User.init(
    {
        // Define an id column
        id: {
        // User the special Sequelize DataTypes  object provide what type of data it is
        type: DataTypes.INTEGER,
        // This is equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // Instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
    },
        // Define a username Column
        username: {
        type: DataTypes.STRING,
        allowNull: false
    },

        // Define an Email Column
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        // There cannot be any duplicate email values in this table
        unique: true,
        // If allowNull is set to false, we can run our data through validators before creating the table data
        validate: {
            isEmail: true
        }
    },

        // define a password Column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // This means the password must be at least four characters long
                len: [4]
            }
        }
    },

    {
        // TABLE CONFIGURATION OPTIONS GO HERE
        
        // Pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // Don't automatically create createdAt/updateAt timestamp fields
        timestamps: false,
        // Don't pluralize name of database table
        freezeTableName: true,
        //User underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // Make it so our model name stays lowercase in the database
        modelName: 'user'
    
    }
);

module.exports = User;