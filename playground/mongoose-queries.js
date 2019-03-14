const { mongoose } = require("./../server/db/mongoose")
const { Todo } = require("./../server/models/todo")

var id = "5c8875681d42ef06977899dc"

Todo.find({ _id: id }).then(todos => {
  console.log("Todos", todos)
})

Todo.findOne({ _id: id }).then(todo => {
  console.log("Todo", todo)
})
