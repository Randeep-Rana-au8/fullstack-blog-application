const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// const url = 'mongodb://localhost/27017'
const port = process.env.PORT || 3000
// const user = require('./routes/user')
const health = require('./routes/health')

const InitiateMongoServer = require('./auth/db')

let app = express() 
app.use(cors())
app.use(bodyParser.json())
InitiateMongoServer()

app.use('/', health)


app.listen(port, (err) => {
    if(err) throw err
    console.log(`app is running on port ${port}`)
})