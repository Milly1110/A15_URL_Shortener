const express = require('express')
const router = express.Router()
const URL = require('../../models/URLshorten')
const generateURL = require('../../generate_url')
const indexUrl = 'http://fast-hamlet-09862.herokuapp.com'

router.get('/', (req, res) => {
  res.render('index')
})
//產生短網址
router.post('/', (req, res) => {
  const url = req.body.url
  //若使用者沒有輸入有效內容，就按下了送出鈕，需要防止表單送出並提示使用者
  if (!url.includes('https://') && !url.includes('http://')) {
    const alert = 'Please input efective URL'
    res.render('index', { alert, url })
  }
  else {
    let shortUrl = generateURL()
    return URL.create({
      originalUrl: url,
      shortenUrl: shortUrl
    })
      .then(() => {
        res.render('urlshorter', { shortUrl, indexUrl })
      })
      .catch(error => console.log(error))
  }

})
// 點選短網址連結到原始網站
router.get('/:newurl', (req, res) => {
  const { newurl } = req.params
  // console.log(req.params)
  URL.findOne({ shortenUrl: newurl })
    .lean()
    .then(url => res.redirect(url.originalUrl))
    .catch(error => console.log(error))
})

module.exports = router