var express = require('express');
var toornamentWrapper = require('../wrappers/toornament/Toornament');
var router = express.Router();
var config = require('../config/config.json');

var toornament = new toornamentWrapper({
  secure: true,
  tournamentId: config.TournamentId,
  host: 'api.toornament.com',
  path: '/v1',
  key: config.ToornamentApi,
  clientId: config.ToornamentClientId,
  clientSecret: config.ToornamentClientSecret,
  debug: false
});

/* GET home page. */
router.get('/groups', function(req, res, next) {
  toornament.getGroups(function(err, response) {
    if (!err) {
      res.json(response.groups);
    } else {
      res.json(err);
    }
  })
});

router.get('/matches', function(req, res, next) {
  toornament.getMatches(function(err, response) {
    if (!err) {
      res.json(response);
    } else {
      res.json(err);
    }
  })
});

router.get('/matches/upcoming', function(req, res, next) {
  toornament.getMatches(function(err, response) {
    if (!err) {
      res.json(response.filter(function(match) {
        return match.status === 'pending' && match.opponents[0].participant && match.opponents[1].participant
      }));
    }  else {
      res.json(err);
    }
  });
});

router.get('/matches/latest', function(req, res, next) {
  toornament.getMatches(function(err, response) {
    if(!err) {
      res.json(
          response.filter(function(match) {
            return match.status === 'completed' && match.opponents[0].participant && match.opponents[1].participant
          })
          .slice(-5));
    }
  })
});

module.exports = router;
