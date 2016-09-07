module.exports = {
  attributes: {
    match: {
      model: 'Match'
    },
    home: {
      model: 'Team'
    },
    homeScore: {
      type: 'integer'
    },
    away: {
      model: 'Team'
    },
    awayScore: {
      type: 'integer'
    },
    winner: {
      type: 'string',
      enum: ['home', 'away']
    },
    status: {
      type: 'string',
      enum: ['pending', 'active', 'complete']
    }
  }
};
