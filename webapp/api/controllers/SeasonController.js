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
    Match.find().populate('season', {where: {
      id: req.param('id')
    }}).populate('opponents').exec(function(err, response) {
      if (!err) {
        return res.json(response);
      }
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
