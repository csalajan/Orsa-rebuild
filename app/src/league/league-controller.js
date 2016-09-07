var LeagueController = function($scope, $routeParams, LeagueService) {
    $scope.league = {};

    LeagueService.getLeague($routeParams.id).then(function(response) {
        $scope.league = response;
    });
};

angular.module('ncs').controller('LeagueController', ['$scope', '$routeParams', 'LeagueService', LeagueController]);