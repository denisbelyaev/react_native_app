var Router = require('koa-router');
var Book = require('../models/Book');
var mongoose = require('mongoose');

var bookRouter = new Router();

bookRouter
    .param('bookById', function*(id, next) {
        console.log('---------------------------');
        if (!mongoose.Types.ObjectId.isValid(id)) {
            this.throw(404);
        }

        this.userById = yield Book.findById(id);

        if (!this.userById) {
            this.throw(404);
        }

        yield* next;
    })
    .get('/', function* () {
        console.log('-----------------------')
        var books = yield Book.find({}).lean();//вернуть обычный обьект не мангузовский

        this.body = JSON.stringify(books);
    })
    .post('/', function*(next) {

        var book = yield Book.create({
            name: this.request.body.name,
            description: this.request.body.description
        });

        this.body = book.toObject();
    })
    .get('/:bookById', function*(next) {
        this.body = this.bookById.toObject();
    })
    .del('/:bookById', function*(next) {
        var book = yield Book.remove({_id: this.bookById});

        console.log(book);
        this.body = book;
    })
    .get('/', function*(next) {
        var books = yield Book.find({}).lean();

        this.body = books;
    });

module.exports = bookRouter;