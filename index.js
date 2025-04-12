const express = require('express') // CommonJS modules
const app = express()
const port = 3000

// Python/Flask:
// @app.route('/', methods=['GET']) // default get
// def home():
//     return 'Hello World!'
//
// app.[http-verb]([path], [callback])
// Callback accepts a request and response object
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the dev server on the given port
// The callback is called when the server is running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
