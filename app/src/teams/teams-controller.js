var TeamsController = function($scope, TeamsService, UserService) {
    $scope.teams = {};

    $scope.user = UserService.getUser();

    TeamsService.getTeams()
        .then(function(response) {
            $scope.teams = response;
        });



};

angular.module('ncs').controller("TeamsController", TeamsController);