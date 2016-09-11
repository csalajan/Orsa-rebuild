(function() {
  var _teams;
  var _matches;
  var _league;

  var createMatches = function() {
    _teams.forEach(function(team) {
        var match = findMatch(team);
    });
  };

  var findMatch = function(teamA) {
    var teamB =_teams.find(function(opponent) {
        return haveNotMet(teamA, opponent);
    });

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
    }).exec(function(err, match) {
      if (!err) {
        match.opponents.add([teama, teamb]);
        match.save();
      }
    });
  };

  var haveNotMet = function(team, opponent) {
    if (team === opponent) {
      return false;
    }
    return _matches.every(function(match) {
      return !match.opponents.includes(team) && !match.opponents.includes(opponent);
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
