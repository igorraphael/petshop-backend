import Client from '../models/Client';

class ClientController {
  /**
   * Initial customer creation
   */
  async store(req, res) {
    try {
      const { id, name } = await Client.create(req.body);
      return res.json({ msg: `Customer ${id}-${name} successfully created` });
    } catch (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async list(req, res) {
    try {
      const clients = await Client.findAll();
      return res.json(clients);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

  async update(req, res) {
    return res.json('Route update user');
  }
}

export default new ClientController();
