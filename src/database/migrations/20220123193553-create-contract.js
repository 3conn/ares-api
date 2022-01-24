'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLE_CONTRACT, {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.DECIMAL(10,2)
      },
      installments: {
        type: Sequelize.INTEGER
      },
      tradeRepresentative: {
        type: Sequelize.STRING
      },
      obs: {
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
    await queryInterface.dropTable(process.env.TABLE_CONTRACT);
  }
};