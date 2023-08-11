const router = require('express').Router();
const apiProductsRouter = require('./api/api.products.router');

router.use('/api/products', apiProductsRouter);

module.exports = router;
