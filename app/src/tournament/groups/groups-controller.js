var GroupsController = function($scope, TournamentService) {
    $scope.groups = {};

    TournamentService.getGroupStage().then(function(data) {
        $scope.groups = data;
    });
};

angular.module('ncs').controller('GroupsController', ['$scope', 'TournamentService', GroupsController]);
