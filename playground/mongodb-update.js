const MongoClient = require("mongodb").MongoClient
const ObjectID = require("mongodb").ObjectID
const assert = require("assert")

// Connection URL
const url = "mongodb://localhost:27017"

// Database Name
const dbName = "TodoApp"

// Create a new MongoClient
const client = new MongoClient(url)

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err)
  console.log("Connected successfully to server")

  const db = client.db(dbName)
  const col = db.collection("Todos")

  col
    .findOneAndUpdate(
      { _id: new ObjectID("5c8601cbf124ff13dbf57d9b") },
      {
        $set: { completed: true }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result)
      client.close()
    })
})
