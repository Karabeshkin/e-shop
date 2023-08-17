const router = require('express').Router();

const { Favourite, Product, Photo, Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { userId } = req.session;
    const favorites = await Favourite.findAll({
      where: { user_id: userId },
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
        const favorites = await Favourite.findAll({
          where: { user_id: userIdsess },
          include: [{ model: Product, include: { model: Photo } }],
        });
        res.json(favorites);
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
        const favorites2 = await Favourite.findAll({
          where: { user_id: userIdsess },
          include: [{ model: Product, include: { model: Photo } }],
        });
        res.json(favorites2);
      }
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/:idFavorite', async (req, res) => {
  try {
    const { idFavorite } = req.params;
    const { userId } = req.session;
    const result = await Favourite.destroy({
      where: { product_id: idFavorite, user_id: userId },
    });
    if (result > 0) {
      res.json({ message: 'success', id: +idFavorite });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
