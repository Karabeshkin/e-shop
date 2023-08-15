/* eslint-disable camelcase */
const router = require('express').Router();
const { Order, OrderItem, Product, Photo } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { product_id } = req.body;
    let cart = await Order.findOne({
      where: { user_id: req.session.userId, isFinished: false },
    });

    if (cart) {
      const product = await OrderItem.findOne({ where: { product_id } });
      if (product) {
        product.count += 1;
        await product.save();
      } else {
        await OrderItem.create({ product_id, order_id: cart.id });
      }
    } else {
      cart = await Order.create({
        user_id: req.session.userId,
        isFinished: false,
      });
      await OrderItem.create({ product_id, order_id: cart.id });
    }
    res.json({ message: 'ok' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { user_id: req.session.userId, isFinished: false },
    });
    const orderitems = await OrderItem.findAll({
      where: { order_id: order.id },
      include: { model: Product, include: { model: Photo } },
    });
    res.json(orderitems);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
