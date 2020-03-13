import Sequelize, { Model } from 'sequelize';

class Orderservice extends Model {
  static init(sequelize) {
    super.init(
      {
        is_package: Sequelize.BOOLEAN,
        services: Sequelize.TEXT,
        situation: Sequelize.TEXT,
        amount: Sequelize.DECIMAL(10, 2),
        date_order: Sequelize.DATEONLY,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
  }
}
export default Orderservice;
