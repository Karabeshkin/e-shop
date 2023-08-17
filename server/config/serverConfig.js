const path = require('path');
const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const sessionConfig = require('./sessionConfig');

const config = (app) => {
  app.use(fileUpload());
  app.use(cookieParser()); // куки-парсер по "хорошему" лучше ставить повыше
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true })); // мидлварка для чтения body запроса, парсит
  app.use(express.json()); // позволяет отправлять данные в формате json
  app.use(express.static(path.join(__dirname, '../public')));
};

module.exports = config;
