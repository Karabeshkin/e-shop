require('@babel/register');
require('dotenv').config();
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const config = require('./config/serverConfig');

const app = express();

app.use(morgan('dev'));

const PORT = process.env.PORT ?? 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

const indexRouter = require('./routes/index.routes');

config(app);

app.use('/', indexRouter);
app.get('*', (req, res) => res.sendFile(path.resolve('../client/build/index.html')));

app.listen(PORT, () => {
  console.log(`сервак шуршит на ${PORT} порте`);
});
