import User from '../models/User';

class UserController {
  /**
   * Create user admin - Remove after create first user.
   */
  async store(req, res) {
    const userExist = await User.findOne({
      where: { username: req.body.username },
    });

    if (userExist) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { id, name, username } = await User.create(req.body);
    return res.json({ id, name, username });
  }

  async update(req, res) {
    return res.json(req.userId);
  }
}

export default new UserController();
