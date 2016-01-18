var UpcomingMatchesDirective = function(common, TournamentService) {
    return {
        templateUrl: common.VIEW_PATH + '/tournament/matches/upcoming-matches.html',
        link: function(scope) {
            scope.matches = {};

            scope.$on('matches-updated', function() {
                scope.matches =  TournamentService.getUpcomingMatches();
            });
        }
    };
};

angular.module('ncs').directive('upcomingMatches', ['COMMON', 'TournamentService', UpcomingMatchesDirective]);
