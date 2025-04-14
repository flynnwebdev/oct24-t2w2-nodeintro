import express from 'express' // ES6 modules
import post_routes from './routes/post_routes.js'

const app = express()
const port = 3000

// Python: app.register_blueprint(post_routes)
app.use(post_routes)

// Start the dev server on the given port
// The callback is called when the server is running
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
