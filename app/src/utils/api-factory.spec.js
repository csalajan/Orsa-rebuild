require('./api-factory.js');

describe('Api Factory', function() {
    var ApiFactory, $q, $rootScope, defered, $http;

    beforeEach(angular.mock.module('ncs'));

    beforeEach(inject(function(_ApiFactory_, _$q_, _$rootScope_, $httpBackend) {
        ApiFactory = _ApiFactory_;
        $q = _$q_;
        $rootScope = _$rootScope_;

        $http = $httpBackend;

        $http.when('POST', '/api/test').respond({status: 200, data: []});
        $http.when('GET', '/api/test').respond({status: 200, data: []});

    }));


    it('Sends a POST request', function(done) {
        ApiFactory.postData('/test', {}).then(function(response) {
            expect(response).toEqual({status: 200, data: []});
            done();
        });
        $http.flush();
    });

    it('Sends a GET request', function(done) {
        ApiFactory.getData('/test', {}).then(function(response) {
            expect(response).toEqual({status: 200, data: []});
            done();
        });
        $http.flush();
    });
});