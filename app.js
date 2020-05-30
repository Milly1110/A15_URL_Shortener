const express = require('express')
const exphbs = require('express-handlebars')
const URL = require('./models/URLshorten')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)



app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})