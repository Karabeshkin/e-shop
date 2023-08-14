const router = require('express').Router();
const { Product, Photo, Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.get('/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const category = await Category.findOne({ where: { title } });
    const products = await Product.findAll({
      include: { model: Photo },
      where: { category_id: category.id },
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get('/:title/:idProd', async (req, res) => {
  try {
    const { title, idProd } = req.params;
    const category = await Category.findOne({ where: { title } });
    const product = await Product.findOne({
      include: { model: Photo },
      where: { category_id: category.id, id: idProd },
    });
    res.json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
