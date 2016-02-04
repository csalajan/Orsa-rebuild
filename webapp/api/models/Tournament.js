/**
* Tournament.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: 'true'
    },
    toornamentId: {
      type: 'string'
    },
    status: {
      type: 'string',
      enum: ['inactive', 'registration', 'active', 'completed'],
      defaultsTo: 'inactive'
    },
    dateStart: {
      type: 'date'
    },
    registrationStart: {
      type: 'date'
    },
    size: {
      type: 'integer'
    },
    participantType: {
      type: 'string',
      enum: ['team', 'single']
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
    },
    matches: {
      collection: 'Match',
      via: 'tournament'
    },
    participantsSolo: {
      collection: 'Users',
      via: 'id'
    },
    participantsTeams: {
      collection: 'Team',
      via: 'id'
    },

    addParticipant: function(participant) {
      switch (this.participantType) {
        case 'team':
              this.participantsTeams.add(participant);
              break;
        case 'solo':
              this.participantsSolo.add(participant);
              break;
      }
    }

  }
};
