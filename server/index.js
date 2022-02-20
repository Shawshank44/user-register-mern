const express = require('express')
const app = express()
const port = 3700
const cors = require('cors')
require('./db/db')

app.use(express.json())
app.use(cors())

app.use(require('./routes/users'))
app.use(require('./routes/logs'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
