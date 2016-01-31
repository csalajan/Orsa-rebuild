/**
 * TournamentController
 *
 * @description :: Server-side logic for managing tournaments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  index: function(req, res) {
    Tournament.find().where({
      or: [
        {
          status: 'active'
        },
        {
          status: 'registration'
        }
      ]
    }).exec(function(err, data) {
      if (!err) {
        res.json(data);
      }
    });
  },
  matches: function(req, res) {
    Toornament.getMatches(function(err, data) {
      if (!err) {
        res.json(data);
      } else {
        res.json(err);
      }
    });
  },
  groups: function(req, res) {
    Toornament.getGroups(function(err, data) {
      if (!err) {
        res.json(data.groups);
      } else {
        res.json(err);
      }
    });
  },
  brackets: function(req, res) {
    Toornament.getBrackets(function(err, data) {
      if (!err) {
        res.json(data);
      } else {
        res.json(err);
      }
    });
  }
};

