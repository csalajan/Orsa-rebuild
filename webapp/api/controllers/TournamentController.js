/**
 * TournamentController
 *
 * @description :: Server-side logic for managing tournaments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
  }
};

