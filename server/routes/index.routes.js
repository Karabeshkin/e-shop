const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const productRouter = require('./views/products.routes');
const favouritesRouter = require('./views/favourites.routes');
const cartRouter = require('./views/cart.routes');
const authRoute = require('./views/auth.routes');
const authApiRoute = require('./api/auth.routes');
const commentRouter = require('./api/comments.routes');
const apiCartRouter = require('./api/cart.routes');
const apiFavouritesRouter = require('./api/favourites.routes');

router.use('/', mainRouter);
router.use('/products', productRouter);
router.use('/favourites', favouritesRouter);
router.use('/cart', cartRouter);
router.use('/auth', authRoute);
router.use('/api/auth', authApiRoute);
router.use('/api/comments', commentRouter);
router.use('/api/cart', apiCartRouter);
router.use('/api/favourites', apiFavouritesRouter);

module.exports = router;
