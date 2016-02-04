var TeamNavigationDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + '/accounts/teams/team-navigation/team-navigation.html',
        link: function (scope) {

        }
    };
};

angular.module('ncs').directive('teamNav', ['COMMON', TeamNavigationDirective]);