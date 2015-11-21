var RegistrationController = function($scope, UserService) {
    $scope.user = {};

    $scope.register = function(user) {
        UserService.register(user);
    };
};

angular.module('app').controller("RegistrationController", RegistrationController);