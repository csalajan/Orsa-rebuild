module.exports = {
  index: function(req, res) {
    Season.find().where({
      or: [
        {
          status: 'active'
        },
        {
          status: 'open'
        }
      ]
    }).exec(function(err, response) {
      if(!err) {
        res.json(response);
      }
    });
  },
  matches: function(req, res) {
    League.find().populate('season', {where: {
      id: req.param('id')
    }}).populate('matches').then(function(leagues) {

      var matchIds = sails.util._.map(leagues, function(league) {
            var ids = [];
            league.matches.forEach(function(match) {
              ids.push(match.id);
            });
            return ids;
        });
        var mergedMatchIds = [].concat.apply([], matchIds);
        Match.find({
          id: mergedMatchIds
        }).populate('opponents').populate('league').exec(function(err, matches) {
          res.json(matches);
        })
    })
  },
  register: function(req, res) {
    Users.findOne(req.token.id).populate('team').exec(function(err, user) {
      if(!err) {
        console.log(user);
        if (user.team.leader === user.id) {
          Season.findOne(req.body.seasonId).populate('teams').exec(function(error, season) {
            season.teams.add(user.team);
            season.save();
            res.json(season);
          })
        } else {
          res.json({
            err: 'Only the team leader can register the team for a new season'
          })
        }
      }
    })
  }
};
