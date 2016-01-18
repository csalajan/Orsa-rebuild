/**
 * Factory for sending requests to the back end
 *
 */

var ApiFactory = function($http, $q) {
    var url = "/api";
    var AuthToken = "";

    return {
        /**
         * Sets the authorization token.
         *
         * ### Examples:
         *
         *     ApiFactory.setToken('123')
         *
         * @param {String} string value of token
         * @api public
         */
        setToken: function (token) {
            AuthToken = token;
        },

        /**
         * Sends a GET request to the back end
         *
         * ### Examples:
         *
         *     ApiFactory.getData('/users')
         *
         * @param {String} url to back end
         * @returns {Object} Promise object for response
         * @api public
         */
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

angular.module('ncs').factory('ApiFactory', ApiFactory);