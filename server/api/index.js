const Router = require('koa-router');
const v1 =  require('./v1');

let api = new Router({prefix: '/api'});

api.use('/v1', v1.routes());

module.exports = api;