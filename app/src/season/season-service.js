/**
 * Service for handling all tournament information.
 *
 */

var SeasonService = function($rootScope, ApiFactory) {
    var matches = [];

    var setMatches = function(season) {
        ApiFactory.getData('/season/matches', {season: season}).then(function (data) {
            matches = data;
            $rootScope.$broadcast('matches-updated');
        });
    };

    this.getActiveSeasons = function() {
        return ApiFactory.getData('/season').then(function(response) {
            setMatches(response.id);
            return response;
        });
    };

    this.getSeasonInfo = function(id) {
        return ApiFactory.getData('/season/'+id);
    };

    /**
     * Returns latest completed matches
     *
     * ### Examples:
     *
     *     TournamentService.getLatestMatches()
     *
     * @returns {Array} array of latest matches
     * @api public
     */
    this.getLatestMatches = function() {
        return matches.filter(function(match) {
            return match.status === 'complete';
        }).slice(-5).reverse();
    };

    this.getUpcomingMatches = function() {
        return matches.filter(function(match) {
            return match.status === 'pending';
        });
    };

    this.getMatchDetails = function(id) {
        return matches.filter(function(match) { return match.id == id;})[0];
    };
};

angular.module('ncs').service('SeasonService', ['$rootScope', 'ApiFactory', SeasonService]);
