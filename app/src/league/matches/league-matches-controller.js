var LeagueMatchesController = function($scope, $routeParams, LeagueService) {
    $scope.league = {};
    $scope.matches = [];

    LeagueService.getLeague($routeParams.id).then(function(response) {
        $scope.league = response;
        LeagueService.getMatches(response.id).then(function(matches) {
            $scope.matches = matches;
        });
    });


};

angular.module('ncs').controller('LeagueMatchesController', ['$scope', '$routeParams', 'LeagueService', LeagueMatchesController]);