var RegistrationController = function($scope, UserService) {
    $scope.user = {};

    $scope.register = function(user) {

        UserService.register(user);
    };
};

angular.module('ncs').controller("RegistrationController", RegistrationController);