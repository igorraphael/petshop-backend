import Sequelize, { Model } from 'sequelize';

class Cashflow extends Model {
  static init(sequelize) {
    super.init(
      {
        type: Sequelize.TEXT,
        amount: Sequelize.DECIMAL(10, 2),
        obs: Sequelize.TEXT,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Orderservice, {
      foreignKey: 'order_id',
      as: 'orderservice',
    });
  }
}
export default Cashflow;
