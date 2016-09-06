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
    },
    description: {
      type: 'text'
    },
    rules: {
      type: 'text'
    },
    prizes: {
      type: 'text'
    },
    teamSizeMin: {
      type: 'integer'
    },
    teamSizeMax: {
      type: 'integer'
    },
    matchFormat: {
      type: 'string',
      enum: ['bo1', 'bo3', 'bo5', 'bo7']
    }
  }
};
