/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  _config: {
    actions: true,
    shortcuts: false,
    rest: false
  },
  index: function(req, res) {
    Users.find().exec(function(err, data) {
      if (!err) {
        res.json(data);
      }
    });
  },
  update: function(req, res) {
    Users.update({id: req.token.id}, req.allParams()).exec(function(err, user) {
      if (!err) {
        res.json({user: user[0]});
      }
    });
  },
  team: function(req, res) {
    Users.findOne(req.token.id).exec(function(err, user) {
      if (!err) {
        Team.findOne(user.team).populate('leader').populate('members').exec(function(error, team) {
          if (!error) {
            res.json(team);
          }
        });
      }
    });
  }
};

