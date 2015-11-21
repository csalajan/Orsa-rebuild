var UserService = function(ApiFactory) {
    var user;

    this.login = function(username, password, callback) {
        ApiFactory.postData("/user/login", {username: username, password: password})
            .then(callback);
    };
};

angular.module('app').service('UserService', ['ApiFactory', UserService]);
