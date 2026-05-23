const express = require('express')
const { Query } = require('mysql2/typings/mysql/lib/protocol/sequences/Query')
const db = require('./db')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

const db = require('./db')

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname,'public','index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const apiRoutes = requre('./routes/api');
app.use(express.json());
app.use('/api/users', apiRoutes);