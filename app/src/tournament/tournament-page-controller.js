var TournamentPageController = function($scope, $routeParams, TournamentService, TournamentConst) {
    $scope.tournament = {};

    TournamentService.getTournamentInfo($routeParams.id).then(function(data) {
        $scope.tournament = data;
    });

    $scope.matchFormat = function(format) {
        return TournamentConst.matchFormat[format];
    };
};

angular.module('ncs').controller('TournamentPageController', ['$scope', '$routeParams', 'TournamentService', 'TournamentConst', TournamentPageController]);
