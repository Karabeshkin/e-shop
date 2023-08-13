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

module.exports = router;
