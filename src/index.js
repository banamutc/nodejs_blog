const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000
// const Cookies = require('js-cookie')

const sortMiddleware = require('./app/middleware/SortMiddleware')

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.use(methodOverride('_method'))
// Cookies.set('name', 'value')
// app.get(
//     '/middleware',
//     function (req, res, next) {
//         if (['vethuong', 'vevip'].includes(req.query.ve)) {
//             req.face = 'Gach gach gach !!!'
//             return next()
//         }
//         res.status(403).json({ message: 'Access denied' })
//     },
//     function (req, res, next) {
//         res.json({ message: 'Successfully', face: req.face })
//     },
// )

// custom Middleware
app.use(sortMiddleware)

// XMLHttpRequest, fetch, axios

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
    }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})
