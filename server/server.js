if (process.env.TRACE) {
    require('./libs/trace');
}
var koa = require('koa');
var app = new koa();
var config = require('config');
var path = require('path');
var fs = require('fs');

var config = require('config');

var api = require('./api');

app.keys = [config.secret];

var middlewares = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

middlewares.forEach(function(middleware) {
    app.use(require('./middlewares/' + middleware));
});


app.use(function* (next) {
    this.type = 'application/json';
    yield* next;
});

app.use(api.routes());

app.listen(config.server.port, function(err) {
    console.log('server listen: ' + config.server.port);
});
 