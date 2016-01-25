module.exports = function (req, res, next) {
  Users.findOne({id: req.token.id}, function(err, user) {
    if (!user.isAdmin) res.json(401, {err: "Not Authorized"});
    next();
  });

};
