var MatchController = function($scope, $routeParams, TournamentService) {
    $scope.matchResult = {
        1: 'Victory',
        2: 'Draw',
        3: 'Defeat'
    };

    $scope.match = TournamentService.getMatchDetails($routeParams.id);
};

angular.module('ncs').controller('MatchController', ['$scope', '$routeParams', 'TournamentService', MatchController]);
