module.exports = (sequelize, DataTypes) => {
  class UsuarioModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsuarioModel.init({
    nameoficial: DataTypes.STRING,
    nameconventional: DataTypes.STRING,
    num_reg: DataTypes.STRING,
    login: DataTypes.STRING,
    fkrole: DataTypes.STRING,
    fkrepresentative: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    contato: DataTypes.STRING,
    address: DataTypes.STRING,
    expireDate: DataTypes.DATE,
    lockedDate: DataTypes.DATE,
    fkPartner: DataTypes.STRING,
    fkdepartment: DataTypes.STRING,
    fkcontract: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    createdBy: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.TABLE_USUARIOS,
  });
  return UsuarioModel;
};