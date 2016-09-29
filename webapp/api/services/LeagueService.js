(function() {
  var _teams;
  var _matches = [];
  var _league;

  var createMatches = function() {
    _teams.forEach(function(team) {
        if(_matches.filter(function(match) {
            return match.opponents[0] === team || match.opponents[1] === team;
          }).length == 0) {

          findMatch(team);
        }
    });
  };

  var findMatch = function(teamA) {
    var teamB =_teams.find(function(opponent) {
        return haveNotMet(teamA, opponent);
    });
    console.log(teamB);
    if (teamB) {
      var match = generateMatch(teamA, teamB);
      _teams = _teams.filter(function(team) {
        return team !== teamA && team !== teamB
      });
    }
  };

  var generateMatch = function(teama, teamb) {
    return Match.create({
      league: _league,
      format: 'bo3',
      status: 'pending'
    }).populate('opponents').exec(function(err, match) {
      if (!err) {
        match.opponents.add([teama, teamb]);
        match.save();
        _matches.push({opponents: [teama, teamb]});
      }
    });
  };

  var haveNotMet = function(team, opponent) {
    if (team === opponent) {
      return false;
    }
    return _matches.every(function(match) {
      console.log(match.opponents[0].name, match.opponents[1].name, team.name, opponent.name);
      return !(match.opponents[0].name === team.name &&
             match.opponents[1].name === opponent.name ||
             match.opponents[1].name === team.name &&
             match.opponents[0].name === opponent.name);
    })
  };

  var LeagueService = {
    rankTeams: function (teams) {
      return teams.sort(function (a, b) {
        return a.ranking > b.ranking;
      });
    },
    generateMatches: function (league) {
      _league = league;
      _teams = this.rankTeams(league.teams);
      _matches = league.matches;

      createMatches();
    }
  };


  module.exports = LeagueService;
})();
