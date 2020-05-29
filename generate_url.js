function random(collection) {
  const index = Math.floor(Math.random() * collection.length)
  return collection[index]
}


function generateURL() {
  const lowerletters = 'abcdefghijklmnopqrstuvwxyz'
  const upperletters = lowerletters.toUpperCase()
  const number = '1234567890'
  let collection = []
  collection = collection.concat([...lowerletters]).concat([...toUpperCase]).concat([...number])
  let randomURL = ''
  for (let i = 0; i < 5; i++) {
    randomURL += random(collection)
  }
  return randomURL
}
module.exports = generateURL
