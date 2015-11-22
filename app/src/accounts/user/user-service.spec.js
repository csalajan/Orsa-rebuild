require('./user-service.js');

describe('User Service', function() {
    var userService, $http, $q;

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function(_UserService_, $httpBackend, _$q_) {
        userService = _UserService_;
        $http = $httpBackend;
        $q = _$q_;
    }));

    describe('Successfully Calls', function() {
        beforeEach(function() {
            var deferred = $q.defer();
            deferred.resolve({status: 200, data: {}});
            $http.when('POST', '/user/login').respond(deferred.promise);
            $http.when('POST', '/user/register').respond(deferred.promise);
        });

        it('Login', function() {
            userService.login("test", "test")
                .then(function(response) {
                    expect(response).toEqual({status: 200, data: {}});
                });
            $http.flush();
        });

        it('Register', function() {
            userService.register({})
                .then(function(response) {
                    expect(response).toEqual({status: 200, data: {}});
                });
            $http.flush();
        });
    });

    describe('Unsuccessfully calls', function() {

    });

});
