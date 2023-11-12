"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User",
    }
    
    );
    return User;
    
  };
  
  // "use strict";
  // const { Sequelize, Model, DataTypes } = require("sequelize");
  // const sequelize = require("../config/config");
  
  // class User extends Model {
  //  static associate(models) {
  //    // define association here
  //  }
  // }
  
  // User.init(
  //  {
  //    name: DataTypes.STRING,
  //    email: DataTypes.STRING,
  //    password: DataTypes.STRING
  //  },
  //  {
  //    sequelize,
  //    modelName: "User",
  //  }
  // );
  
  // module.exports = User;
  