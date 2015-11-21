var UserLogin = function(common, UserService) {
    return {
        templateUrl: common.VIEW_PATH + '/accounts/user/login.html',
        scope: {
          user: '=user'
        },
        link: function(scope) {
            scope.user = {
                loggedIn: false
            };

            scope.showLogin = function() {
                console.log('it works');
            };

            scope.login = function() {
                UserService.login("test", "test");
            }
        }
    };
};

angular.module('app').directive('userLogin', ['COMMON', 'UserService', UserLogin]);