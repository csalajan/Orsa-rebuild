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
                name: 'groups',
                url: '/groups'
            }
        ];
    };
};

angular.module('ncs').service('navigationService', NavigationService);