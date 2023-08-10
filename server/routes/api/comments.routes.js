const router = require('express').Router();
const CommentItem = require('../../components/CommentItem');
const { Comment, User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { description, product_id } = req.body;
    const newComment = await Comment.create({
      user_id: req.session.userId, product_id, description,
    });
    const comment = await Comment.findOne({ where: { id: newComment.id }, include: User });
    console.log(comment, '-------');
    // console.log(description, product_id, '111111111111111');
    res.json({
      message: 'success',
      html: res.renderComponent(CommentItem, { comment }, { htmlOnly: true }),
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:commentId', async (req, res) => {
  // console.log('5555555555555');
  try {
    const result = await Comment.destroy({
      where: { id: req.params.commentId, user_id: req.session.userId },
    });
    if (result) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'Не твоя вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
