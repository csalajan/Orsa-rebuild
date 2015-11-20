require('./navigation-service.js');

describe('Navigation Service', function() {
    var navigationService;

    var nav = [
        {
            name: 'home',
            url: '/'
        }
    ];

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function (_navigationService_) {
        navigationService = _navigationService_;

    }));

    it('Returns array for navigation', function() {

        expect(navigationService.getNavigation()).toEqual(nav);
    });
});
