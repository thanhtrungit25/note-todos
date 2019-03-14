const { mongoose } = require("./../server/server")
const { Todo } = require("./../server/models/todo")

var id = "5c864a8de62f90ae13eae57f"

Todo.find({ _id: id }).then(todos => {
  console.log("Todos", todos)
})

Todo.findOne({ _id: id }).then(todo => {
  console.log("Todo", todo)
})
