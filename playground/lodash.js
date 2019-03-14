const _ = require("lodash")

var objA = { name: "colin", car: "suzuki" }
var objB = { name: "james", age: 17 }

console.log(_.assign(objA, objB))
