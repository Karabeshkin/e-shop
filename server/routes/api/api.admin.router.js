const router = require('express').Router();
const fileUploadMiddleware = require('../../middleware/fileUploadMiddleware');
const {
  Product,
  Category,
  Photo,
  Order,
  OrderItem,
  User,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
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
    const { url } = req.files;
    const { name, cost, category, description } = req.body;

    const newUrl = await fileUploadMiddleware(url);

    let newProduct = await Product.create({
      title: name,
      cost,
      category_id: Number(category),
      description,
    });
    const newPhoto = await Photo.create({
      product_id: newProduct.id,
      url: newUrl,
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
      const result = await Product.findOne({
        where: { id },
        include: [{ model: Category }, { model: Photo }],
      });
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

router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { isFinished: true },
      include: [
        { model: User },
        { model: OrderItem, include: { model: Product } },
      ],
    });
    if (orders) {
      res.json(orders);
    } else {
      res.json({ message: 'заказов нет!' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
