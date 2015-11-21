var UserLogin = function(common, UserService) {
    return {
        templateUrl: common.VIEW_PATH + '/accounts/user/login.html',
        scope: {
          user: '=user'
        },
        link: function(scope) {

            scope.showLogin = function() {
                console.log('it works');
            };

            scope.login = function() {
                UserService.login("test", "test", handleLogin);
            };

            var handleLogin = function(response) {

            };
        }
    };
};

angular.module('app').directive('userLogin', ['COMMON', 'UserService', UserLogin]);