const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('This is URL shortener web')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})