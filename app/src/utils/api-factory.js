var ApiFactory = function($http) {
    var url = "";
    var AuthToken = "";

    return {
        setToken: function (token) {
            AuthToken = token;
        },
        getData: function (api) {
            return $http.get(url + api);
        },
        postData: function (api, data) {
            return $http.post(url + api, data);
        }
    };
};

angular.module('app').factory('ApiFactory', ApiFactory);