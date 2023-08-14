const router = require('express').Router();
const { Product, Category, Photo } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // const categories = await Category.findAll();
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Photo }],
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await Product.destroy({ where: { id: productId } });
    if (result > 0) {
      res.json({ message: 'success', id: productId });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
