import Expense from '../models/Expense';

class ExpenseController {
  /**
   * Create expense
   */
  async create(req, res) {
    try {
      const { id, name } = await Expense.create(req.body);
      return res.json({ msg: `Expense ${id}-${name} successfully created` });
    } catch (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  /**
   * List all expenses
   */
  async list(req, res) {
    try {
      const { id, name } = await Expense.create(req.body);
      return res.json({ msg: `Customer ${id}-${name} successfully created` });
    } catch (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  /**
   * Update expense
   */
  async update(req, res) {
    try {
      const { id } = req.body;
      const expense = await Expense.findByPk(id);
      if (!expense) {
        return res.status(401).json({ error: 'Expense not found.' });
      }
      const expUpdate = await expense.update(req.body);

      return res.json(expUpdate);
    } catch (error) {
      return res.status(401).json({ error: 'Error unexpected' });
    }
  }

  /**
   * Delete expense
   */
  async delete(req, res) {
    try {
      const expense = await Expense.findByPk(req.params.id);
      if (!expense) {
        return res.status(401).json({ error: 'Expense not found.' });
      }
      await expense.destroy(expense);
      return res.json('Deleted successfully');
    } catch (error) {
      return res.status(401).json({ error: 'Error unexpected' });
    }
  }
}

export default new ExpenseController();
