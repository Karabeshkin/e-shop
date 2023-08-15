/* eslint-disable camelcase */
const router = require('express').Router();
const { Order, OrderItem, Product, Photo } = require('../../db/models');
const orderitem = require('../../db/models/orderitem');

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
    if (order) {
      const orderitems = await OrderItem.findAll({
        where: { order_id: order.id },
        include: { model: Product, include: { model: Photo } },
      });
      res.status(200).json(orderitems);
    } else {
      res.status(400).json({ message: 'нет' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const result = await OrderItem.destroy({ where: { id: itemId } });
    if (result > 0) {
      res.status(200).json({ message: 'success', id: itemId });
      return;
    }
    res.status(400).json({ message: 'error' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
