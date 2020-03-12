module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dt_birthday: {
        type: Sequelize.DATEONLY,
        defaultValue: null,
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true,
      },
      rg: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: null,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      address_n: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      address_comp: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      zip_code: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('clients');
  },
};
