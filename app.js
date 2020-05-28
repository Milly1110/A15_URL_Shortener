const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
mongoose.connect('mongodb://localhost/URL-Shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on = ('error', () => {
  console.log('mongodb error!')
})
db.once = ('open', () => {
  console.log('mongodb connected!')
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const url = req.body.url
  return URL.create({ name })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})