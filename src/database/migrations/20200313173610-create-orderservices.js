module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orderservices', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: { model: 'clients', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      is_package: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      services: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      situation: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: null,
      },
      date_order: {
        type: Sequelize.DATEONLY,
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
    return queryInterface.dropTable('orderservices');
  },
};
