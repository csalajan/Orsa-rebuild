var SeasonsController = function($scope, SeasonService) {
    $scope.seasons = {};

    SeasonService.getActiveSeasons().then(function(data) {
        $scope.seasons = data;
    });
};

angular.module('ncs').controller('SeasonsController', ['$scope', 'SeasonService', SeasonsController]);