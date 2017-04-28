const Router = require('koa-router');
const books =  require('./routes/books');

let v1 = new Router();

v1.use('/books', books.routes());

module.exports = v1;