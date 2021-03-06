import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import User from '../app/models/User';
import Client from '../app/models/Client';
import Orderservice from '../app/models/Orderservice';
import Expense from '../app/models/Expense';
import Cashflow from '../app/models/Cashflow';
import Dog from '../app/models/Dog';

const models = [User, Client, Orderservice, Expense, Cashflow, Dog];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
export default new Database();
