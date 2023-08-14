const router = require('express').Router();
const apiProductsRouter = require('./api/api.categories.router');
const apiAuthRouter = require('./api/api.auth.routes');

router.use('/api/categories', apiProductsRouter);
router.use('/api/auth', apiAuthRouter);

module.exports = router;
