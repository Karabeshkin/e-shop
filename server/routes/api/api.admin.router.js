const router = require('express').Router();
const { Product, Category, Photo } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    // const categories = await Category.findAll();
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Photo }],
    });
    const categories = await Category.findAll();
    res.json({ products, categories });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, cost, categoryId, description } = req.body;
    let newProduct = await Product.create({
      title: name,
      cost,
      category_id: categoryId,
      description,
    });
    newProduct = await Product.findOne({
      where: { id: newProduct.id },
      include: [{ model: Category }, { model: Photo }],
    });
    res.json(newProduct);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/', async (req, res) => {
  try {
    const { id, name, cost, categoryId, description } = req.body;

    if ((id, name, cost, categoryId, description)) {
      const result = await Product.findOne({ where: { id } });
      result.title = name;
      result.cost = cost;
      result.category_id = categoryId;
      result.description = description;

      await result.save();
      res.json(result);
    }
  } catch ({ message }) {
    res.json({ message });
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
