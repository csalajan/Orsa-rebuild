var NavigationDirective = function(navigationService, common) {
    return {
        templateUrl:  common.VIEW_PATH + '/header/navigation/navigation.html',
        scope: {
            footer: '=footer'
        },
        link: function(scope) {
            scope.navigation = navigationService.getNavigation();
        }
    };
};

angular.module('ncs').directive('navigation', ['navigationService', 'COMMON', NavigationDirective]);