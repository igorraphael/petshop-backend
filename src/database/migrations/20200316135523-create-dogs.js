module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dogs', {
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
        defaultValue: null,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      breed: {
        type: Sequelize.TEXT,
      },
      color: {
        type: Sequelize.TEXT,
      },
      package: {
        type: Sequelize.CHAR(1),
        allowNull: false,
      },
      day: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    return queryInterface.dropTable('dogs');
  },
};
