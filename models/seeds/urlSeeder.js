const URL = require('../URLshorten')
const db = require('../../config/mongoose')

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