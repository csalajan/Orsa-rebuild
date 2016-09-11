module.exports = {
  index: function(req, res) {
    League.find().exec(function(err, data) {
      if (!err) {
        res.json(data);
      } else {
        res.json(err);
      }
    });
  },
  findOne: function(req, res) {
    League.findOne(req.param('id')).populate('teams').populate('matches').exec(function(err, response) {
      if (!err) {
        res.json(response);
      }
    });
  },
  start: function(req, res) {
    League.findOne(req.param('id')).populate('matches').populate('teams').exec(function(err, response) {
      if(!err) {
        LeagueService.generateMatches(response);
        res.json(200, 'matches created');
      }
    })
  },
  matches: function(req, res) {
    Match.find().where({league: req.param('id')}).populate('opponents').exec(function(err, matches) {
      if (!err) {
        res.json(matches);
      }
    });
  }

};
