var UserLogin = function(common, UserService, $location) {
    return {
        templateUrl: common.VIEW_PATH + '/accounts/user/login-directive.html',
        link: function(scope) {
            scope.loginUser = {};

            scope.user = UserService.getUser();

            scope.toggleLogin = function() {
                var dropdown = document.getElementsByClassName('dropdown-menu')[0];
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                } else {
                    dropdown.style.display = 'block';
                }
            };

            scope.login = function(loginUser) {
                UserService.login(loginUser);
                scope.toggleLogin();
            };

            scope.logout = function() {
                UserService.logout();
            };

            scope.$on('user-login', function() {
                scope.user = UserService.getUser();
            });

            scope.$on('user-logout', function() {
                scope.user = UserService.getUser();
            });
        }
    };
};

angular.module('ncs').directive('userLogin', ['COMMON', 'UserService', '$location', UserLogin]);