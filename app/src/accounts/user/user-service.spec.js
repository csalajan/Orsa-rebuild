require('./user-service.js');

describe('User Service', function() {
    var userService;

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function(_UserService_, _ApiFactory_, $q) {
        userService = _UserService_;
        spyOn(_ApiFactory_, "postData").and.returnValue($q.when({status: 200, data: []}));
    }));


    it('is true', function() {
        userService.login("test", "test", function(response) {
            console.log(response);
            expect(response.status).toEqual(200);
        });


    });
});
