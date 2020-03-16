import Cashflow from '../models/Cashflow';
// import Orderservice from '../models/Orderservice';

class CashflowController {
  /**
   * Init cash flow
   */
  async create(req, res) {
    // const { order_id } = req.body;
    // verificar order id mais tarde.
    const order = await Cashflow.create(req.body);
    return res.json(order);
  }
}

export default new CashflowController();
