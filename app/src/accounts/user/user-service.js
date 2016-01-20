var UserService = function(ApiFactory, $window, $rootScope) {
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

    this.register = function(user) {
        ApiFactory.postData('/auth/register', user)
            .then(function(response) {
                USER = response.user;
                $window.sessionStorage.token = response.token;

                $rootScope.$broadcast('user-login');
            });
    };
};

angular.module('ncs').service('UserService', ['ApiFactory', '$window', '$rootScope', UserService]);
