/**
* Team.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    leader: {
      model: 'Users'
    },
    members: {
      collection: 'Users',
      via: 'id',
      dominant: true
    },
    league: {
      collection: 'League',
      via: 'teams'
    },
    matches: {
      model: 'Match'
    },
    ranking: {
      type: 'integer'
    }
  },
  afterCreate: function(team, next) {
    Users.findOne(team.leader).exec(function(err, user) {
        Team.findOne(team.id).populate('members').exec(function(error, teamData) {
          teamData.members.add(user);
          teamData.save();
          next();
        });
    });
  }
};

