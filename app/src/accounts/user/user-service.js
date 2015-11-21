var UserService = function(ApiFactory) {
    var user;

    this.login = function(username, password) {
        ApiFactory.postData("/user/login", {username: username, password: password})
            .then(function(response) {
                console.log('In THEN');
                //if (response.status == 200) {
                    ApiFactory.setToken(response.data.token);
                    user = response.data;
                //}
            });
    };
};

angular.module('app').service('UserService', ['ApiFactory', UserService]);
