const router = require('express').Router();
const { Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();

    // const products = await Product.findAll({
    //   include: [{ model: Category }, { model: Photo }],
    // });


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

module.exports = router;
