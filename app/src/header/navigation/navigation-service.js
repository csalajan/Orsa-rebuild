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
            },
            {
                name: 'teams',
                url: '/teams'
            }
        ];
    };
};

angular.module('ncs').service('navigationService', NavigationService);