const router = require('express').Router();
const { Order, OrderItem } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { product_id } = req.body;
    let cart = await Order.findOne({
      where: { user_id: req.session.userId, status: false },
    });
    if (cart) {
      await OrderItem.create({ product_id, cart_id: cart.id });
    } else {
      cart = await Order.create({ user_id: req.session.userId, status: false });
      await OrderItem.create({ product_id, cart_id: cart.id });
    }
    res.json({ message: 'ok' });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
