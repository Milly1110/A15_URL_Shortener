const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlshortenSchema = new Schema({
  originalUrl: String,
  shortenUrl: String
})
module.exports = mongoose.model('URLshorten', urlshortenSchema)