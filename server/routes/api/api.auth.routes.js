const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  try {
    const {
      name, phone, password, cpassword,
    } = req.body;
    let user = await User.findOne({ where: { phone } });
    if (!name || !phone || !password || !cpassword) {
      res.status(400).json({ message: 'Заполните все поля' });
      return;
    }
    if (user) {
      res.status(400).json({ message: 'Такой пользователь уже существует' });
      return;
    }
    if (password !== cpassword) {
      res.status(400).json({ message: 'Пароли не совпадают' });
      return;
    }

    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, phone, password: hash });
    req.session.userId = user.id;

    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ where: { phone } });
    if (!phone || !password) {
      res.status(400).json({ message: 'Заполните все поля' });
      return;
    }
    if (!user) {
      res.status(400).json({ message: 'Такого юзера не существует' });
      return;
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      res.status(400).json({ message: 'пароль неверный' });
      return;
    }

    req.session.userId = user.id;
    res.json({ message: 'ok' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/verification', async (req, res) => {
  try {
    const { userId } = req.session;
    if (userId) {
      const user = await User.findOne({
        where: { id: userId },
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },

      });
      res.status(201).json(user);
    } else {
      res.status(403).json({ message: 'не в сети' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res.clearCookie('user_sid').json({ message: 'success' });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
