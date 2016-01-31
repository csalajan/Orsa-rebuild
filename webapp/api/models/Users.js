/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcryptjs');

module.exports = {

  schema: true,

  attributes: {
    email: {
      type: 'email',
      required: 'true',
      unique: true // Yes unique one
    },
    username: {
      type: 'string',
      required: 'true',
      unique: true
    },
    isAdmin: {
      type: 'integer',
      defaultsTo: 0
    },
    summoner: {
      type: 'string',
      unique: true
    },
    name: {
      type: 'string'
    },
    gender: {
      type: 'string'
    },
    birthdate: {
      type:  'datetime'
    },
    occupation: {
      type: 'string'
    },
    website: {
      type: 'string'
    },
    about: {
      type: 'text'
    },
    facebook: {
      type: 'string'
    },
    twitter: {
      type: 'string'
    },
    skype: {
      type: 'string'
    },
    cpu: {
      type: 'string'
    },
    graphics: {
      type: 'string'
    },
    ram: {
      type: 'string'
    },
    motherboard: {
      type: 'string'
    },
    drives: {
      type: 'string'
    },
    display: {
      type: 'string'
    },
    mouse: {
      type: 'string'
    },
    keyboard: {
      type: 'string'
    },
    headset: {
      type: 'string'
    },
    mousepad: {
      type: 'string'
    },
    matches: {
      model: 'Match'
    },

    encryptedPassword: {
      type: 'string'
    },
    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject();
      delete obj.encryptedPassword;
      return obj;
    }
  },
  // Here we encrypt password before creating a User
  beforeCreate : function (values, next) {
    bcrypt.genSalt(10, function (err, salt) {
      if(err) return next(err);
      bcrypt.hash(values.password, salt, function (err, hash) {
        if(err) return next(err);
        values.encryptedPassword = hash;
        next();
      })
    })
  },

  comparePassword : function (password, user, cb) {
    bcrypt.compare(password, user.encryptedPassword, function (err, match) {

      if(err) cb(err);
      if(match) {
        cb(null, true);
      } else {
        cb(err);
      }
    })
  }
};

