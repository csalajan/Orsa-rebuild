var RegistrationController = function($scope, UserService) {
    $scope.user = {};

    $scope.register = function(user) {
        console.log(user);
        UserService.register(user);
    };
};

angular.module('ncs').controller("RegistrationController", RegistrationController);