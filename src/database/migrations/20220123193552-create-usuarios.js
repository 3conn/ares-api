'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLE_USUARIOS, {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: Sequelize.STRING
      },
      nameoficial: {
        type: Sequelize.STRING
      },
      nameconventional: {
        type: Sequelize.STRING
      },
      num_reg: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.STRING
      },
      fkrole: {
        type: Sequelize.STRING
      },
      fkrepresentative: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      contato: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      expireDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      lockedDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      fkPartner: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fkdepartment: {
        allowNull: true,
        type: Sequelize.STRING
      },
      fkcontract: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(process.env.TABLE_USUARIOS);
  }
};