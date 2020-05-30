const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const URL = require('./models/URLshorten')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
mongoose.connect('mongodb://localhost/url_shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on = ('error', () => {
  console.log('mongodb error!')
})
db.once = ('open', () => {
  console.log('mongodb connected!')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)



app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})