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

angular.module('app').service('navigationService', NavigationService);