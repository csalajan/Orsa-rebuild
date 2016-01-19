
"use strict";

var request = require('request');
var url = require('url');
var RequestError = require('./request_error');
var settings = sails.config.toornament;

// Inits class and saves settings in it

var Toornament = {
  key: settings.api_key,
  endpoint: settings.host + settings.path,
  host: settings.host,
  path: settings.path,
  tournamentId: settings.tournament_id,
  clientId: settings.client_id,
  clientSecret: settings.client_secret,
  debug: settings.debug,
  secure: settings.secure,
  generateUrl: function (options, ignorePath) {

    if (options && options.query) {
      options.query.api_key = this.key;
    } else {
      options.query = {api_key: this.key};
    }

    var result = url.format({
      protocol: (this.secure) ? 'https:' : 'http:',
      host: this.host + (ignorePath ? "" : this.path) + options.path,

    });

    return result;

  },
  makeRequest: function (url, cb) {

    if (this.debug) {
      console.log('Calling url', url);
    }

    var options = {
      url: url,
      headers: {
        'X-Api-Key': this.key,
        'Authorization': 'Bearer ' + this.accessToken
      }
    };

    request.get(options, function (err, res, body) {

      if (this.debug) {
        console.log(body);
      }

      if (err) {

        if (this.debug) {
          console.log('Request err:', err);
        }

        cb(err);
      } else {
        if (res.statusCode === 200) {
          try {

            body = JSON.parse(body);
            cb(null, body);
          } catch (e) {

            cb(e);
          }
        } else {
          err = new RequestError(url, res.statusCode);
          cb(err);
        }

      }

    }.bind(this));

  },
  putRequest: function (url, data, cb) {

    if (this.debug) {
      console.log('Calling url', url);
    }

    var options = {
      url: url,
      headers: {
        'X-Api-Key': this.key,
        'Authorization': 'Bearer ' + this.accessToken
      },
      method: 'PUT',
      json: data
    };
    request(options, function (err, res, body) {

      if (this.debug) {
        console.log(body);
      }

      if (err) {

        if (this.debug) {
          console.log('Request err:', err);
        }

        cb(err);
      } else {
        if (res.statusCode === 200) {
          try {
            if (typeof(body) !== 'object') {
              body = JSON.parse(body) || {};
            }
            cb(null, body);
          } catch (e) {
            cb(e);
          }
        } else {
          err = new RequestError(url, res.statusCode);
          cb(err);
        }

      }

    }.bind(this));
  },
  getOAuthToken: function () {
    request.post('https://api.toornament.com/oauth/v2/token', {
      form: {
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret
      }
    }, function (err, response, body) {
      this.accessToken = JSON.parse(body).access_token;
    }.bind(this))
  },
  getDetails: function (cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId
    });

    this.makeRequest(url, cb);
  },
  getMatches: function (cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/matches'
    });

    this.makeRequest(url, cb);
  },
  getMatch: function (id, cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/matches/' + id
    });

    this.makeRequest(url, cb);
  },
  getSchedule: function (cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/schedules'
    });

    this.makeRequest(url, cb);
  },
  getParticipants: function (cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/participants'
    });

    this.makeRequest(url, cb);
  },
  getParticipant: function (id, cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/participants/' + id
    });

    this.makeRequest(url, cb);
  },
  getStages: function (cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/stages'
    });

    this.makeRequest(url, cb);
  },
  getGroups: function (cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/stages/1/view'
    });

    this.makeRequest(url, cb);
  },
  getBrackets: function(cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/stages/2/view'
    });

    this.makeRequest(url, cb);
  },
  updateMatch: function (matchId, data, cb) {
    var url = this.generateUrl({
      path: '/tournaments/' + this.tournamentId + '/matches/' + matchId + '/result'
    });

    console.log(url);
    this.putRequest(url, data, cb);
  }
};


module.exports = Toornament;
