var NavigationService = function() {
    this.getNavigation = function() {
        return [
            {
                name: 'home',
                url: '/'
            },
            {
                name: 'tournaments',
                url: '/tournaments'
            }
        ];
    };
};

angular.module('ncs').service('navigationService', NavigationService);