require('./login-directive.js');
require('../../utils/api-factory.js');
require('./user-service.js');

describe('Login Directive', function() {
    var $compile,
        $rootScope,
        $scope,
        $http;

    var user = {
        id: 1,
        username: 'test'
    };

    beforeEach(angular.mock.module("app"));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_, $httpBackend){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $http = $httpBackend;

        $http.whenGET('src/app/accounts/user/login.html').respond('src/app/accounts/user/login.html');

    }));

    describe('User Is Not Logged In', function() {

        beforeEach(inject(function() {
            $scope.user = {};
        }));

        it('User field is empty', function() {
            var element = $compile("<div user-login></div>")($scope);
            $scope.$digest();

            expect(element.scope().user).toEqual({});
        });

        it('Logs user in', function() {
            var element = $compile("<div user-login></div>")($scope);
            $scope.$digest();

        })
    });

    describe('User Is Logged In', function() {
        beforeEach(inject(function() {
            $scope.user = user;
        }));
    });

});