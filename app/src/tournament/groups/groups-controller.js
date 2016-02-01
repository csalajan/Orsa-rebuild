var GroupsController = function($scope, $routeParams, TournamentService) {
    $scope.groups = {};

    TournamentService.getGroupStage().then(function(data) {
        $scope.groups = data;
    });

    $scope.tournament = {};

    TournamentService.getTournamentInfo($routeParams.id).then(function(data) {
        $scope.tournament = data;
    });
};

angular.module('ncs').controller('GroupsController', ['$scope', '$routeParams', 'TournamentService', GroupsController]);
