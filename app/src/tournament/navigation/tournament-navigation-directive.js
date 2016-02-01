var TournamentNavigationDirective = function(common) {
    return {
        templateUrl:  common.VIEW_PATH + '/tournament/navigation/tournament-navigation-directive.html',
        scope: {
            tournament: '='
        },
        link: function(scope) {

        }
    };
};

angular.module('ncs').directive('tournamentNavigation', ['COMMON', TournamentNavigationDirective]);