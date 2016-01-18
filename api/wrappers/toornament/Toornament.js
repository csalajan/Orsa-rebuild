
"use strict";

var request = require('request');
var url = require('url');
var colors = require('colors');
var RequestError = require('./request_error');


// Inits class and saves settings in it

var Toornament = function (settings){

    this.key = settings.key;
    this.endpoint = settings.endpoint;
    this.tournamentId = settings.tournamentId;
    this.clientId = settings.clientId;
    this.clientSecret = settings.clientSecret;

    if (settings.debug === true){
        this.debug = true;
    }

    this.secure = (settings.secure) ? settings.secure : false;
    this.host = settings.host;
    this.path = settings.path;

    this.getOAuthToken();

    return this;

};

// Generic functions -> can be called from the outside

Toornament.prototype.generateUrl = function (options, ignorePath){

    if(options && options.query){
        options.query.api_key = this.key;
    } else {
        options.query = {api_key: this.key};
    }

    var result = url.format({
        protocol: (this.secure) ? 'https:' : 'http:',
        host: this.host + (ignorePath ? "" : this.path) + options.path,

    });

    return result;

};

Toornament.prototype.makeRequest = function (url, cb){

    if (this.debug){
        console.log('Calling url', url);
    }

    var options = {
        url: url,
        headers: {
            'X-Api-Key': this.key,
            'Authorization': 'Bearer ' + this.accessToken
        }
    };

    request.get(options, function (err, res, body){

        if (this.debug){
            console.log(body);
        };

        if(err){

            if (this.debug){
                console.log('Request err:', err);
            }

            cb(err);
        } else{
            if(res.statusCode === 200){
                try {

                    body = JSON.parse(body);
                    cb(null, body);
                } catch (e){

                    cb(e);
                }
            } else {
                err = new RequestError(url, res.statusCode);
                cb(err);
            }

        }

    }.bind(this));

};

Toornament.prototype.putRequest = function (url, data, cb){

    if (this.debug){
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
    request(options, function (err, res, body){

        if (this.debug){
            console.log(body);
        }

        if(err){

            if (this.debug){
                console.log('Request err:', err);
            }

            cb(err);
        } else{
            if(res.statusCode === 200){
                try {
                    if (typeof(body)  !== 'object') {
                        body = JSON.parse(body) || {};
                    }
                    cb(null, body);
                } catch (e){
                    cb(e);
                }
            } else {
                err = new RequestError(url, res.statusCode);
                cb(err);
            }

        }

    }.bind(this));

};

Toornament.prototype.getOAuthToken = function() {
    request.post('https://api.toornament.com/oauth/v2/token', {form: {
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret
    }}, function(err, response, body) {
        this.accessToken = JSON.parse(body).access_token;
    }.bind(this))
};

Toornament.prototype.getDetails = function(cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId
    });

    this.makeRequest(url, cb);
}

Toornament.prototype.getMatches = function(cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId + '/matches'
    });

    this.makeRequest(url, cb);
};

Toornament.prototype.getMatch = function(id, cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId + '/matches/' + id
    });

    this.makeRequest(url, cb);
};

Toornament.prototype.getSchedule = function(cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId + '/schedules'
    });

    this.makeRequest(url, cb);
};

Toornament.prototype.getParticipants = function(cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId + '/participants'
    });

    this.makeRequest(url, cb);
};

Toornament.prototype.getParticipant = function(id, cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId + '/participants/' + id
    });

    this.makeRequest(url, cb);
};

Toornament.prototype.getStages = function(cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId + '/stages'
    });

    this.makeRequest(url, cb);
};

Toornament.prototype.getGroups = function(cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId + '/stages/1/view'
    });

    this.makeRequest(url, cb);
};



Toornament.prototype.updateMatch = function(matchId, data, cb) {
    var url = this.generateUrl({
        path: '/tournaments/' + this.tournamentId + '/matches/' + matchId + '/result'
    });

    console.log(url);
    this.putRequest(url, data, cb);

};


module.exports = Toornament;
