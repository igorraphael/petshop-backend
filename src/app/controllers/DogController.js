import Dog from '../models/Dog';

class DogController {
  /**
   * Create dog
   */
  async create(req, res) {
    const dog = await Dog.create(req.body);
    return res.json(dog);
  }
}

export default new DogController();
