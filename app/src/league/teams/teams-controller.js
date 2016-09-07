var LeagueTeamsController = function($scope, $routeParams, LeagueService) {
    $scope.league = {};

    LeagueService.getLeague($routeParams.id).then(function(response) {
        $scope.league = response;
    });
};

angular.module('ncs').controller('LeagueTeamsController', ['$scope', '$routeParams', 'LeagueService', LeagueTeamsController]);