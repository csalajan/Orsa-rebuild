var NavigationService = function() {
    this.getNavigation = function() {
        return [
            {
                name: 'home',
                url: '/'
            },
            {
                name: 'seasons',
                url: '/seasons'
            },
            {
                name: 'teams',
                url: '/teams'
            }
        ];
    };
};

angular.module('ncs').service('navigationService', NavigationService);