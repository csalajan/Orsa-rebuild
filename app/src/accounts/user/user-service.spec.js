require('./user-service.js');

describe('User Service', function() {
    var userService, $http, $q, $rootScope;

    var user = {
        username: 'Test'
    };

    beforeEach(angular.mock.module('ncs'));

    beforeEach(inject(function(_UserService_, $httpBackend, _$q_, _$rootScope_) {
        userService = _UserService_;
        $http = $httpBackend;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    describe('Login', function() {
        beforeEach(function () {
            $http.when('POST', '/api/auth/login').respond({status: 200, user: user, token: 'token'});
        });

        it('performs user login', function (done) {
            userService.login("Test", "Test");
            $rootScope.$on('user-login', function() {
                expect(userService.getUser()).toEqual(user);
                done();
            });

            $http.flush();
        });
    });
    describe('Registration', function() {
        beforeEach(function() {
            $http.when('POST', '/api/auth/register').respond({user: user});
        });

        it('Register', function(done) {
            userService.register({username: 'test', password: 'test'});

            $rootScope.$on('user-login', function() {
                expect(userService.getUser()).toEqual(user);
                done();
            });

            $http.flush();
        });
    });

    describe('Verification', function() {
        beforeEach(function() {

        });

        it('Verified User', function(done) {
            $http.expectPOST('/api/auth/verify', {token: 'token'}).respond(200, {user: user});
            userService.verifyUser('token');

            $rootScope.$on('user-login', function() {
                expect(userService.getUser()).toEqual(user);
                done();
            });

            $http.flush();
        });

        it('Unverified User', function() {
            $http.expectPOST('/api/auth/verify', {token: 'token'}).respond(200, {});
            userService.verifyUser('token');

            $http.flush();
        });
    });

    describe('Logout', function() {

        it('Logs the user out', function() {
            userService.logout();

            expect(userService.getUser()).toBe(null);
        });
    });

    describe('Get User Team', function() {

        beforeEach(function(done) {
            $http.when('POST', '/api/auth/login').respond({status: 200, user: user, token: 'token'});
            userService.login('test', 'test');

            $rootScope.$on('user-login', function() {
                setTimeout(done, 0);
            });

            $http.flush();
        });

        it('returns user team information', function(done) {
            $http.expectGET('/api/users/team').respond(200, {name:'test team'});
            userService.getUserTeam();

            $rootScope.$on('user-updated', function() {
                expect(userService.getUser().team.name).toEqual('test team');
                done();
            });

            $http.flush();
        });
    });

    describe('Update User', function() {

        beforeEach(function(done) {
            $http.when('POST', '/api/auth/login').respond({status: 200, user: user, token: 'token'});
            userService.login('test', 'test');

            $rootScope.$on('user-login', function() {
                setTimeout(done, 0);
            });

            $http.flush();
        });

        it ('Updates User Data', function(done) {

            $http.expectPOST('/api/users/update', {username: 'Test', skype: '123'}).respond({user: {username: 'Test', skype: '123'}});
            user.skype = '123';
            userService.updateUser(user);

            $rootScope.$on('user-login', function() {
                expect(userService.getUser().skype).toEqual('123');
                done();
            });

            $http.flush();
        });

        it("Doesn't update user", function() {
            $http.expectPOST('/api/users/update', {username: 'Test', skype: '123'}).respond(200, {});
            user.skype = '123';
            userService.updateUser(user);

            $http.flush();
        });
    });

});
