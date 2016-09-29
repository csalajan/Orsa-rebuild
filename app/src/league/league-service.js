var LeagueService = function($rootScope, ApiFactory) {

    var league = {};

    this.getLeague = function(id) {
        if (id === league.id) {
            return league;
        }

        return ApiFactory.getData('/league/'+id).then(function(response) {
            league = response;
            return response;
        });
    };

    this.getMatches = function(league) {
        return ApiFactory.getData('/league/matches/'+league);
    };
};

angular.module('ncs').service('LeagueService', ['$rootScope', 'ApiFactory', LeagueService]);