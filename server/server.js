const Koa        = require('koa')
const bodyParser = require('koa-bodyparser')
const rootRouter = require('./router/router.js')
const mongoCl    = require('./db/db')
const cors       = require('koa2-cors')
const app        = new Koa();
// const hostname   = 'proflandia.herokuapp.com'
const port       = process.env.PORT
const initialDb  = require('./db/setup')

async function server() {
    const db    = await mongoCl.connect();
    const stats = await db.stats();
    
    if (!stats.indexes)
        await initialDb();
    
    app.use(bodyParser());     

    app.use(cors())

    app.use(rootRouter.routes())
    
    app.on('error', (err) => {
        console.log('server error', err)
    });

    app.listen(port, (e) => {
        if (e)
            console.log(e)
        console.log(`listen at http://${hostname}:${port}`)
    });
}

server()
