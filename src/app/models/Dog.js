import Sequelize, { Model } from 'sequelize';

class Dog extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.TEXT,
        breed: Sequelize.TEXT,
        color: Sequelize.TEXT,
        package: Sequelize.TEXT,
        day: Sequelize.TEXT,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Orderservice, {
      foreignKey: 'client_id',
      as: 'client',
    });
  }
}
export default Dog;
