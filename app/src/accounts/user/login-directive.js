var UserLogin = function(common) {
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
        }
    };
};

angular.module('app').directive('userLogin', ['COMMON', UserLogin]);