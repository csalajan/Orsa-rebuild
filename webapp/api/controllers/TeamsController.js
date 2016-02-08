/**
 * TeamsController
 *
 * @description :: Server-side logic for managing Teams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
    Team.find().populate('leader').populate('members').exec(function(err, teams) {
      if (!err) {
        res.json(teams);
      } else {
        res.json(err);
      }
    });
  },
  find: function(req, res) {
    Team.findOne(req.param('id')).populate('leader').populate('members').exec(function(err, team) {
      if (!err) {
        res.json(team);
      } else {
        req.json(err);
      }
    });
  },
  join: function(req, res) {
    Users.find(req.token.id).exec(function(err, user) {
      if (!err) {
        Team.find(req.body.teamId).exec(function(error, team) {
          if (!error) {
            team.member.add(user);
            team.save();
            res.json(team);
          } else {
            res.json(error);
          }
        });
      } else {
        res.json(err);
      }
    })
  },
  leave: function(req, res) {

  },
  create: function(req, res) {
    Users.find(req.token.id).exec(function(error, user) {
      if (!error) {
        Team.create(req.body).exec(function (err, team) {
          if (!err) {
            team.leader = user;
            team.save();
            res.json(team);
          } else {
            res.json(err);
          }
        });
      } else {
        res.json(err);
      }
    })
  }
};

