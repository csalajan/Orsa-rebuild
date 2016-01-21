var TeamsController = function($scope, UserService) {
    $scope.user = UserService.getUser();

};

angular.module('ncs').controller("TeamsController", TeamsController);