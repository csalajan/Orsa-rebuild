var jwt = require('jsonwebtoken');
var tokenSecret = "thisIsASecret";

module.exports.issue = function(payload) {
  return jwt.sign(
    payload,
    tokenSecret,
    {
      expiresIn: 10800
    }
  )
};

module.exports.verify = function(token, cb) {
  return jwt.verify(
    token,
    tokenSecret,
    {},
    cb
  )
};
