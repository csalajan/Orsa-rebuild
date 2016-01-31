require('./home-controller.js');

var NewsServiceMock;

describe('Home Controller', function() {
    var scope, ctrl, $timeout;

    beforeEach(angular.mock.module('ncs'));

    beforeEach(inject(function($rootScope, $controller, $q, _$timeout_) {
        $timeout = _$timeout_;

        var deferred = $q.defer();
        deferred.resolve({});
        NewsServiceMock = jasmine.createSpyObj('NewsService', ['getLatestNews']);
        NewsServiceMock.getLatestNews.and.returnValue(deferred.promise);
        scope = $rootScope.$new();
        ctrl = $controller('HomeController', {
            $scope: scope,
            NewsService: NewsServiceMock
        });
    }));

    it('is true', function() {
        $timeout.flush();
        expect(NewsServiceMock.getLatestNews).toHaveBeenCalled();
    });
});
