var LatestMatchesDirective = function(common, SeasonService) {
    return {
        templateUrl: common.VIEW_PATH + '/tournament/matches/latest-matches.html',
        link: function(scope) {
            scope.latest = {};

            scope.$on('matches-updated', function() {
                scope.latest = SeasonService.getLatestMatches();
                console.log(scope.latest);
            });

        }
    };
};

angular.module('ncs').directive('latestMatches', ['COMMON', 'SeasonService', LatestMatchesDirective]);
