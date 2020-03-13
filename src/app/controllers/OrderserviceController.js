import Orderservice from '../models/Orderservice';
import Client from '../models/Client';

class OrderserviceController {
  /**
   * Initial customer creation
   */
  async create(req, res) {
    try {
      const {
        client_id,
        is_package,
        services,
        situation,
        date_order,
        amount,
      } = req.body;
      /**
       * Check exist client
       */
      const isClient = await Client.findOne({
        where: { id: client_id },
      });
      if (!isClient) {
        return res.status(401).json({ error: 'Not found client' });
      }
      const order = await Orderservice.create({
        client_id,
        is_package,
        services,
        situation,
        date_order,
        amount,
      });

      return res.json(order);
    } catch (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  /**
   * List all order services.
   */
  async list(req, res) {
    try {
      const orderList = await Orderservice.findAll();
      return res.json(orderList);
    } catch (error) {
      return res.status(401).json({ error: 'Does not exist order' });
    }
  }
}

export default new OrderserviceController();
