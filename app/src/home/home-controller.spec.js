require('./home-controller.js');

describe('Home Controller', function() {
    var scope, ctrl;

    beforeEach(angular.mock.module('ncs'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('HomeController', {
            $scope: scope,
            NewsService: {
                getLatestNews: function() {
                    return {then: function() {
                        
                    }}
                }
            }
        });
    }));

    it('is true', function() {
        expect(true).toBe(true);
    });
});
