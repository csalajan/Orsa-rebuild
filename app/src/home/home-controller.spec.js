require('./home-controller.js');

describe('Home Controller', function() {
    var scope, ctrl;

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('HomeController', {
            $scope: scope
        });
    }));

    it('is true', function() {
        expect(scope.test()).toBe(true);
    });
});
