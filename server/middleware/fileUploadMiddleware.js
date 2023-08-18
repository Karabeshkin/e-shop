const path = require('path');
const util = require('util');

const storage = async (file) => {
  console.log('2222222');
  const fileName = file.name;
  const size = file.data.length;
  const extension = path.extname(fileName);
  const allowedExtensions = /png|jpeg|JPG|gif|webp|mp4|wmv|jpg|mov/;
  // eslint-disable-next-line no-throw-literal
  if (!allowedExtensions.test(extension)) throw 'Unsupported extension !';
  // eslint-disable-next-line no-throw-literal
  if (size > 500000000) throw 'File must be less than 5MB';
  const { md5 } = file;
  const URL = `/img/${md5}${extension}`;
  console.log(URL, 'uuuuuuuur');
  await util.promisify(file.mv)(`./public${URL}`);
  return URL;
};
module.exports = storage;
