var LatestMatchesDirective = function(common, TournamentService) {
    return {
        templateUrl: common.VIEW_PATH + '/tournament/matches/latest-matches.html',
        link: function(scope) {
            scope.matches = TournamentService.getLatestMatches();
        }
    };
};

angular.module('app').directive('latestMatches', ['COMMON', 'TournamentService', LatestMatchesDirective]);
