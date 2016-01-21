var ProfileController = function($scope, UserService) {
    $scope.user = UserService.getUser();

    $scope.$on('user-login', function() {
        $scope.user = UserService.getUser();
    });

};

angular.module('ncs').controller("ProfileController", ProfileController);