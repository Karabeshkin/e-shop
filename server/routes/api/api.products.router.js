const router = require('express').Router();
const { Product, Category, Photo } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Photo }],
    });
    console.log(products,'---------------------')
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
