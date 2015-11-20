var NavigationDirective = function(navigationService) {
    return {
        templateUrl: 'app/src/header/navigation/navigation.html',
        scope: {
            footer: '=footer'
        },
        link: function(scope) {
            scope.navigation = navigationService.getNavigation();
        }
    };
};

angular.module('app').directive('navigation', ['navigationService', NavigationDirective]);