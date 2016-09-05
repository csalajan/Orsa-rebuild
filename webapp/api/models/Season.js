module.exports = {
  tableName: 'seasons',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      enum: ['open', 'active', 'closed']
    },
    matches: {
      collection: 'Match',
      via: 'season'
    },
    teams: {
      collection: 'Team',
      via: 'league',
      dominant: true
    }
  }
};
