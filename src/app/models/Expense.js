import Sequelize, { Model } from 'sequelize';

class Expense extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        every_month: Sequelize.BOOLEAN,
        expiration_day: Sequelize.INTEGER,
        due_date: Sequelize.DATEONLY,
      },
      { sequelize }
    );

    return this;
  }
}
export default Expense;
