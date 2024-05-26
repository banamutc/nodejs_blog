const newRoute = require('./news')
const meRouter = require('./me')
const coursesRoute = require('./courses')
const siteRoute = require('./site')

function route(app) {
    app.use('/news', newRoute)
    app.use('/me', meRouter)
    app.use('/courses', coursesRoute)
    app.use('/', siteRoute)

    // Query parameter thì .query còn form data .body
}

module.exports = route
