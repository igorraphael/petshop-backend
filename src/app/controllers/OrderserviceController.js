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

      // Check exist client
      const isClient = await Client.findByPk(client_id);
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
      const orders = await Orderservice.findAll({
        attributes: [
          'id',
          'client_id',
          'is_package',
          'services',
          'situation',
          'amount',
          'date_order',
        ],
        include: [{ model: Client, as: 'client', attributes: ['name'] }],
      });
      return res.json(orders);
    } catch (error) {
      return res.status(401).json({ error: 'Does not exist order' });
    }
  }

  /**
   * Update order service
   */
  async update(req, res) {
    try {
      const { id } = req.body;
      // Check order exists
      const order = await Orderservice.findByPk(id);
      if (!order) {
        return res.status(401).json({ error: 'Order not found.' });
      }
      const orderUpdate = await order.update(req.body);

      return res.json(orderUpdate);
    } catch (error) {
      return res.status(401).json({ error: 'Error unexpected' });
    }
  }
}

export default new OrderserviceController();
