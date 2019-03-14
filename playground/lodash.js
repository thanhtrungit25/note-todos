const _ = require("lodash")
/* pick
var object = { a: 1, b: "2", c: 3 }

var newObject = _.pick(object, ["a", "c"])

console.log(object, newObject)
*/

var object = { a: 1, b: "2", c: 3 }

var newObject = _.pickBy(object, _.isString)

console.log(object, newObject)
