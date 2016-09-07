var LeagueNavigationDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + '/league/league-navigation/league-navigation.html',
        link: function (scope) {

        }
    };
};

angular.module('ncs').directive('leagueNav', ['COMMON', LeagueNavigationDirective]);