'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {

      Todo.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Todo.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    is_compeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};

