const { ObjectID } = require("mongodb")

const { mongoose } = require("./../server/db/mongoose")
const { Todo } = require("./../server/models/todo")
const { User } = require("./../server/models/user")

// Todo.remove({}).then(result => {
//   console.log(result)
// })

// 5c8a0d2f0fa24e92e9df6cc8
Todo.findOneAndRemove("5c8a0d2f0fa24e92e9df6cc8").then(todo => {
  console.log(todo)
})
