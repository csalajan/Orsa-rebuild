var UserService = function(ApiFactory) {
    var user;

    this.login = function(username, password) {
        return ApiFactory.postData("/user/login", {username: username, password: password})
            .then(function(response) {
                return response;
            });
    };

    this.register = function(user) {
        return ApiFactory.postData('/user/register', user)
            .then(function(response) {
                return response;
            });
    };
};

angular.module('ncs').service('UserService', ['ApiFactory', UserService]);
