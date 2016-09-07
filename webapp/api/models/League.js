module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    season: {
      model: 'Season'
    },
    matches: {
      collection: 'Match',
      via: 'league'
    },
    teams: {
      collection: 'Team',
      via: 'league',
      dominant: true
    }
  }
};
