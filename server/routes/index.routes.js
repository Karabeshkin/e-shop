const router = require('express').Router();
const apiProductsRouter = require('./api/api.categories.router');
const apiAdminProductsRouter = require('./api/api.admin.router');
const apiCartRouter = require('./api/api.cart.routers');

router.use('/api/categories', apiProductsRouter);
router.use('/admin/api/products', apiAdminProductsRouter);
router.use('api/cart', apiCartRouter);

module.exports = router;
