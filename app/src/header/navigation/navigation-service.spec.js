require('./navigation-service.js');

describe('Navigation Service', function() {
    var navigationService;

    var nav = [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'tournaments',
            url: '/tournaments'
        }
    ];

    beforeEach(angular.mock.module('ncs'));

    beforeEach(inject(function (_navigationService_) {
        navigationService = _navigationService_;

    }));

    it('Returns array for navigation', function() {

        expect(navigationService.getNavigation()).toEqual(nav);
    });
});
