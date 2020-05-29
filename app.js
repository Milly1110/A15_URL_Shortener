const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const URL = require('./models/URLshorten')
const generateURL = require('./generate_url')
const bodyParser = require('body-parser')
const indexUrl = 'http://localhost:3000'

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

app.get('/', (req, res) => {
  res.render('index')
})
//產生短網址
app.post('/', (req, res) => {
  const url = req.body.url


  let shortUrl = generateURL()
  return URL.create({
    originalUrl: url,
    shortenUrl: shortUrl
  })
    .then(() => {
      res.render('urlshorter', { shortUrl, indexUrl })
    })
    .catch(error => console.log(error))


})
// 點選短網址連結到原始網站
app.get('/:newurl', (req, res) => {
  const { newurl } = req.params
  //find()第一個參數定義要找尋的資料，第二個參數決定要返回的key；搜尋shortenUrl = newurl者的originalUrl
  // URL.find({ shortenUrl: newurl }, { originalUrl: 1 })  

  URL.findOne({ shortenUrl: newurl })
    .lean()
    .then(url => res.redirect(`${url.originalUrl}`))
    .catch(error => console.log(error))
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})