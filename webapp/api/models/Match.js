/**
* Match.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    status: {
      type: 'string',
      enum: ['pending', 'running', 'complete']
    },
    tournament: {
      model: 'Tournament'
    },
    season: {
      model: 'Season'
    },
    stage: {
      type: 'integer'
    },
    group: {
      type: 'integer'
    },
    round: {
      type: 'integer'
    },
    format: {
      type: 'string',
      enum: ['bo1', 'bo3', 'bo5', 'bo7']
    },
    notes: {
      type: 'text'
    },
    opponents: {
      collection: 'Team',
      via: 'id'
    }
  }
};

