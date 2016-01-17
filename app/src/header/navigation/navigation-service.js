var NavigationService = function() {
    this.getNavigation = function() {
        return [
            {
                name: 'home',
                url: '/'
            }
        ];
    };
};

angular.module('ncs').service('navigationService', NavigationService);