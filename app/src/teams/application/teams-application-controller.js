var TeamsApplicationController = function($scope, $routeParams, TeamsService) {
    $scope.team = {};

    TeamsService.getTeam($routeParams.id)
        .then(function(data) {
            $scope.team = data;
        });

    $scope.sendApplication = function(applicant) {

    };
};

angular.module('ncs').controller('TeamsApplicationController', TeamsApplicationController);