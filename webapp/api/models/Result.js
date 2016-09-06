module.exports = {
  attributes: {
    match: {
      model: 'Match'
    },
    games: {
      collection: 'Game',
      via: 'result',
      dominant: true
    },
    status: {
      type: 'string',
      enum: ['pending', 'active', 'complete']
    }
  },
  score: function() {
    var scores = {
      home: 0,
      away: 0,
      homeScore: 0,
      awayScore: 0
    };
    this.games.forEach(function(game) {
        if (game.status === 'complete') {
          scores.home += (game.winner === 'home' ? 1 : 0);
          scores.away += (game.winner === 'away' ? 1 : 0);
          scores.homeScore += game.homeScore;
          scores.awayScore += game.awayScore
        }
    });

    return scores;
  }
};
