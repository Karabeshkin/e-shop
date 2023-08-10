const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const session = require('express-session');
const ssr = require('../middleware/ssr');
const getUser = require('../middleware/getUser');
const sessionConfig = require('./sessionConfig');

const config = (app) => {
  app.use(cookieParser()); // куки-парсер по "хорошему" лучше ставить повыше, чтобы ниже в миддлварках уже имелся доступ к нашим кукам
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true })); // мидлварка для чтения body запроса, парсит
  app.use(express.json()); // позволяет отправлять данные в формате json
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(ssr);
  app.use(getUser);
};

module.exports = config;
