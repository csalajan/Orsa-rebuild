var UserLogin = function(common, UserService) {
    return {
        templateUrl: common.VIEW_PATH + '/accounts/user/login.html',
        scope: {
          user: '=user'
        },
        link: function(scope) {
            scope.loginUser = {};
            scope.toggleLogin = function() {
                var dropdown = document.getElementsByClassName('dropdown-menu')[0];
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                } else {
                    dropdown.style.display = 'block';
                }
            };

            scope.login = function(loginUser) {
                console.log(loginUser);
                UserService.login("test", "test");
                scope.toggleLogin();
            };

            var handleLogin = function(response) {

            };
        }
    };
};

angular.module('app').directive('userLogin', ['COMMON', 'UserService', UserLogin]);