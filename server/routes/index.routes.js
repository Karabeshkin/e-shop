const router = require('express').Router();

const apiProductsRouter = require('./api/api.categories.router');
const apiAdminProductsRouter = require('./api/api.admin.router');
const apiCartRouter = require('./api/api.cart.routers');
const apiAuthRouter = require('./api/api.auth.routes');
const apiFavoritesRouter = require('./api/api.favorites.router');

router.use('/api/auth', apiAuthRouter);
router.use('/api/categories', apiProductsRouter);
router.use('/admin/api/products', apiAdminProductsRouter);
router.use('/api/cart', apiCartRouter);
router.use('/api/favorites', apiFavoritesRouter);

module.exports = router;
