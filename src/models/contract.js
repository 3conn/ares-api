'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContratoModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContratoModel.init({
    value: DataTypes.STRING,
    installments: DataTypes.INTEGER,
    tradeRepresentative: DataTypes.STRING,
    obs: DataTypes.STRING,
    tradeRepresentative: DataTypes.STRING,
    expireDate: DataTypes.DATE,
    lockedDate: DataTypes.DATE,
    fkPartner: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    createdBy: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.TABLE_CONTRACT,
  });
  return ContratoModel;
};