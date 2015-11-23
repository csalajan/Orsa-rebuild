var ApiFactory = function($http, $q) {
    var url = "";
    var AuthToken = "";


    return {
        setToken: function (token) {
            AuthToken = token;
        },
        getData: function (api) {
            var defered = $q.defer();
            $http.get(url + api)
                .success(function(response) {
                    defered.resolve(response);
                })
                .error(function() {
                    defered.reject();
                });

            return defered.promise;
        },
        postData: function (api, data) {
            var defered = $q.defer();
            $http.post(url + api, data)
                .success(function(response) {
                    defered.resolve(response);
                })
                .error(function() {
                    defered.reject();
                });

            return defered.promise;
        }
    };
};

angular.module('app').factory('ApiFactory', ApiFactory);