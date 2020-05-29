const mongoose = require('mongoose')
const URL = require('../URLshorten')
mongoose.connect('mongodb://localhost/url_shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log(error)
})
db.once('open', () => {
  console.log('mongodb connected!')
  URL.create(
    {
      originalUrl: 'http://tac0005.com/happy-paradise/',
      shortenUrl: 'http://abc17'
    },
    {
      originalUrl: 'https://wisebaby.tw/nightscape-camps/',
      shortenUrl: 'http://efg88'
    })
})