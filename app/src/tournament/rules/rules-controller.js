var RulesController = function($scope, $routeParams, TournamentService) {
    $scope.tournament = {};

    TournamentService.getTournamentInfo($routeParams.id).then(function(data) {
        $scope.tournament = data;
    });
};

angular.module('ncs').controller('RulesController', ['$scope', '$routeParams', 'TournamentService', RulesController]);
