module.exports = function () {
  var faker = require("faker");
  var _ = require("lodash");
  return {
    posts: _.times(10, function (n) {
      return {
        id: n,
        message: faker.lorem.sentence()
      }
    })

  }
}
