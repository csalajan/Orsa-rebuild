var TeamsController = function($scope, TeamsService) {
    $scope.teams = {};

    TeamsService.getTeams()
        .then(function(response) {
            $scope.teams = response;
        });

};

angular.module('ncs').controller("TeamsController", TeamsController);