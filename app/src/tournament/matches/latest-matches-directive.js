var LatestMatchesDirective = function(common, TournamentService) {
    return {
        templateUrl: common.VIEW_PATH + '/tournament/matches/latest-matches.html',
        link: function(scope) {
            scope.latest = {};

            scope.$on('matches-updated', function() {
                scope.latest = TournamentService.getLatestMatches();
            });

        }
    };
};

angular.module('ncs').directive('latestMatches', ['COMMON', 'TournamentService', LatestMatchesDirective]);
