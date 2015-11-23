var MatchController = function($scope, $routeParams, TournamentService) {
    $scope.match = TournamentService.getMatchDetails($routeParams.id);
};

angular.module('app').controller('MatchController', ['$scope', '$routeParams', 'TournamentService', MatchController]);
