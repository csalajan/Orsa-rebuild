var TeamController = function($scope, UserService) {
    $scope.user =  UserService.getUser();

    UserService.getUserTeams();

    $scope.$on('user-updated', function() {
        $scope.user = UserService.getUser();
        console.log($scope.user);
    });

};

angular.module('ncs').controller("TeamController", TeamController);