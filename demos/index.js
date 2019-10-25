
const Koa = require('koa');
const route = require('koa-route');
const fs = require('fs.promised');

const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./demos/login.html', 'utf8');
};


const redirect = ctx => {
  ctx.response.redirect('/');
};

app.use(route.get('/', main));

app.use(main);
app.listen(3000);
