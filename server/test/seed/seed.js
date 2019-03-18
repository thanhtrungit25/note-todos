const { ObjectID } = require("mongodb")
const jwt = require("jsonwebtoken")
const { Todo } = require("../../models/todo")
const { User } = require("../../models/user")

const userOneId = new ObjectID()
const userTwoId = new ObjectID()
const access = "auth"
const users = [
  {
    _id: userOneId,
    email: "trung@gmail.com",
    password: "trung123",
    tokens: [
      {
        access: access,
        token: jwt.sign(
          { _id: userOneId.toHexString(), access },
          process.env.JWT_SECRET
        )
      }
    ]
  },
  {
    _id: userTwoId,
    email: "joe@gmail.com",
    password: "joe123",
    tokens: [
      {
        access: access,
        token: jwt.sign(
          { _id: userTwoId.toHexString(), access },
          process.env.JWT_SECRET
        )
      }
    ]
  }
]

const todos = [
  {
    _id: new ObjectID(),
    text: "First test todo",
    _creator: userOneId
  },
  {
    _id: new ObjectID(),
    text: "Second test todo",
    completed: true,
    completedAt: 333,
    _creator: userTwoId
  }
]

const populateTodos = done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos)
    })
    .then(() => done())
}

const populateUsers = done => {
  User.remove({})
    .then(() => {
      var userOne = new User(users[0]).save()
      var userTwo = new User(users[1]).save()

      return Promise.all([userOne, userTwo])
    })
    .then(() => done())
}

module.exports = {
  todos,
  populateTodos,
  users,
  populateUsers
}
