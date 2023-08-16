const router = require('express').Router();
const { Favourite, Product, Photo, Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const favorites = await Favourite.findAll({
      include: [{ model: Product, include: { model: Photo } }],
    });

    res.json(favorites);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const userIdsess = req.session.userId;
    if (id && userIdsess) {
      let productFav = await Favourite.findOne({
        where: { product_id: id, user_id: userIdsess },
        include: [
          { model: Product, include: [{ model: Photo }, { model: Category }] },
        ],
      });

      if (productFav) {
        await Favourite.destroy({
          where: { id: productFav.id },
        });
        res.json(productFav);
      } else {
        const favorites = await Favourite.create({
          user_id: userIdsess,
          product_id: id,
        });
        productFav = await Favourite.findOne({
          where: { id: favorites.id },
          include: [
            {
              model: Product,
              include: [{ model: Photo }, { model: Category }],
            },
          ],
        });
        res.json(productFav);
      }
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:idFavorite/delete', async (req, res) => {
  try {
    const { idFavorite } = req.params;
    const delFavorite = await Favourite.destroy({ where: { id: idFavorite } });
    res.json({ delFavorite });
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
