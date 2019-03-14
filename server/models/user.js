var { mongoose } = require("../db/mongoose")

var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
})

module.exports = {
  User
}
