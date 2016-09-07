require('./sidebar-directive.js');

describe('Sidebar Directive', function() {
    var $compile,
        $rootScope,
        $scope,
        $http,
        element;

    var SeasonService = {
        getActiveSeasons: jasmine.createSpy()
    };
    beforeEach(angular.mock.module('ncs', function($provide) {
        $provide.value('SeasonService', SeasonService);
    }));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $scope = $rootScope.$new();

        $http = _$httpBackend_;
        $http.whenGET('src/app/sidebar/sidebar.html').respond(200, '');

        element = $compile("<div sidebar></div>")($scope);

        $scope.$digest();
        $http.flush();
    }));

    it('is true', function() {
        expect(true).toBe(true);
    });
}); 