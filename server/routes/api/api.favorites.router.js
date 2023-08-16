const router = require('express').Router();
const { Favorite } = require('../../db/models');
const config = require('../../../client/src/config.json');

console.log('config', config);

router.post('/', async (req, res) => {
  try {
    const { productId } = req.body;
    const userIdsess = req.session.userId;
    if (productId && userIdsess) {
      const favorites = await Favorite.create({
        userId: userIdsess,
        product_id: productId,
      });
      res.json({ message: 'ok' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:idFavorite/delete', async (req, res) => {
  try {
    const { idFavorite } = req.params;
    const delFavorite = await Favorite.destroy({ where: { id: idFavorite } });
    res.json({ delFavorite });
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
