const Koa = require('koa');
const app = new Koa();
const path =require('path')
  , serve = require('koa-static');

const router = require('koa-router')();

router.post('/test', async (ctx) => {
  ctx.body = {
    msg: '成了'
  }
})
router.get('/Asd', async (ctx) => {
  ctx.body = 'Asd'
})


app.use(serve(path.join(__dirname, '../dist'))); 

app.use(router.routes())


app.listen(5006);