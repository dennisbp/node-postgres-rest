const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000


app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// set the HTTP request method
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)