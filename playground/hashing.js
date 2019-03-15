const bcrypt = require("bcryptjs")

var password = "123abc"
// bcrypt.genSalt(10, function(err, salt) {
//   console.log("salt", salt)
//   bcrypt.hash(password, salt, function(err, hash) {
//     console.log("hash", hash)
//   })
// })

var hashedPassword =
  "$2a$10$osK389uUawIEasEJ/IYvsO4VWCuGexqxnmQGjQV2tVD6gJjbKOkzO"

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res)
})

// const { SHA256 } = require("crypto-js")
// const jwt = require("jsonwebtoken")

// var data = {
//   id: 10
// }

// var token = jwt.sign(data, "123abc")
// console.log(token)
// var decoded = jwt.verify(token, "123abc")
// console.log(decoded)

// var message = "I am user number 3"
// var hash = SHA256(message).toString()

// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`)
