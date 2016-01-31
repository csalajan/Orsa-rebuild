/**
 * Service for handling all tournament information.
 *
 */

var TournamentService = function($rootScope, ApiFactory) {
    var matches = [];

    ApiFactory.getData('/tournament/matches').then(function(data) {
        matches = data;
        $rootScope.$broadcast('matches-updated');
    });

    this.getActiveTournaments = function() {
        return ApiFactory.getData('/tournament');
    };

    this.getTournamentInfo = function(id) {
        return ApiFactory.getData('/tournament/'+id);
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
            return match.status === 'completed' && match.opponents[0].participant && match.opponents[1].participant;
        }).slice(-5).reverse();
    };

    this.getUpcomingMatches = function() {
        return matches.filter(function(match) {
            return match.status === 'pending' && match.opponents[0].participant && match.opponents[1].participant;
        });
    };

    this.getMatchDetails = function(id) {
        return matches.filter(function(match) { return match.id == id;})[0];
    };

    this.getGroupStage = function() {
        return ApiFactory.getData('/tournament/groups');
    };
};

angular.module('ncs').service('TournamentService', ['$rootScope', 'ApiFactory', TournamentService]);
