const router = require('express').Router();
const apiProductsRouter = require('./api/api.categories.router');

router.use('/api/categories', apiProductsRouter);

module.exports = router;
