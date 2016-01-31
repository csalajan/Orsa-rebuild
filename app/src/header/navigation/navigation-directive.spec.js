require('./navigation-directive.js');

var nav = [
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

describe('Navigation Directive', function() {
    var $compile,
        $rootScope,
        $scope,
        $http,
        element,
        innerScope;

    beforeEach(angular.mock.module('ncs'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_, _$httpBackend_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $http = _$httpBackend_;

        $http.whenGET('src/app/header/navigation/navigation.html').respond(200, '');
        $scope = $rootScope.$new();
        element = $compile(angular.element("<div navigation></div>"))($scope);
        $scope.$digest();
        $http.flush();
    }));

    it('is true', function() {
        expect(element.isolateScope().navigation).toEqual(nav);
    });
});