const router = require('express').Router();
const apiProductsRouter = require('./api/api.categories.router');
const apiAdminProductsRouter = require('./api/api.admin.router');

router.use('/api/categories', apiProductsRouter);
router.use('/admin/api/products', apiAdminProductsRouter);

module.exports = router;
