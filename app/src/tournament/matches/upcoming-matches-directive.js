var UpcomingMatchesDirective = function(common, SeasonService) {
    return {
        templateUrl: common.VIEW_PATH + '/tournament/matches/upcoming-matches.html',
        link: function(scope) {
            scope.matches = {};

            scope.$on('matches-updated', function() {
                scope.matches =  SeasonService.getUpcomingMatches();
            });
        }
    };
};

angular.module('ncs').directive('upcomingMatches', ['COMMON', 'SeasonService', UpcomingMatchesDirective]);
