var UserService = function(ApiFactory, $window, $rootScope, $location) {
    var USER;

    this.getUser = function() {
        return USER;
    };

    this.login = function(user) {
        ApiFactory.postData("/auth/login", user)
            .then(function(response) {
                USER = response.user;
                $window.sessionStorage.token = response.token;

                $rootScope.$broadcast('user-login');
            });
    };

    this.logout = function() {
        USER = null;
        $window.sessionStorage.token = null;
        $rootScope.$broadcast('user-logout');
    };

    this.register = function(user) {
        return ApiFactory.postData('/auth/register', user)
            .then(function(response) {
                USER = response.user;
                $window.sessionStorage.token = response.token;

                $rootScope.$broadcast('user-login');
                $location.path('/profile');
            });
    };

    this.verifyUser = function(token) {
        ApiFactory.postData('/auth/verify', {token: token})
            .then(function(response) {
               if (response.user) {
                   USER = response.user;

                   $rootScope.$broadcast('user-login');
               }
            });
    };

    this.getUserTeam = function() {
        ApiFactory.getData('/users/team')
            .then(function(response) {
                USER.team = response;
                $rootScope.$broadcast('user-updated');
            });
    };
};

angular.module('ncs').service('UserService', ['ApiFactory', '$window', '$rootScope', '$location', UserService]);
