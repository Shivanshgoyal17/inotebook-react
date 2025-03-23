// https://expressjs.com/en/starter/hello-world.html
// https://expressjs.com/en/resources/middleware/cors.html

const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

connectToMongo()

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())                             // It is known as middleware

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})

