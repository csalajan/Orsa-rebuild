var TournamentsController = function($scope, TournamentService) {
    $scope.tournaments = {};

    TournamentService.getActiveTournaments().then(function(data) {
        $scope.tournaments = data;
    });
};

angular.module('ncs').controller('TournamentsController', ['$scope', 'TournamentService', TournamentsController]);