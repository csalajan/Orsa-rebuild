var MatchController = function($scope, $routeParams, TournamentService) {
    $scope.match = TournamentService.getMatchDetails($routeParams.id);
};

angular.module('ncs').controller('MatchController', ['$scope', '$routeParams', 'TournamentService', MatchController]);
