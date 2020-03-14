module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('expenses', {
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
      every_month: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      expiration_day: {
        type: Sequelize.INTEGER,
      },
      due_date: {
        type: Sequelize.DATEONLY,
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
    return queryInterface.dropTable('expenses');
  },
};
