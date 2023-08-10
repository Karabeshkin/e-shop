require('@babel/register');
require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const config = require('./config/serverConfig');

const app = express();

app.use(morgan('dev'));

const PORT = process.env.PORT ?? 3000;

const indexRouter = require('./routes/index.routes');

config(app);

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`сервак шуршит на ${PORT} порте`);
});
