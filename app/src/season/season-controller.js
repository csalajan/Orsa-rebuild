var SeasonController = function($scope, $routeParams, SeasonService) {
    $scope.season = {};

    SeasonService.getSeasonInfo($routeParams.id).then(function(data) {
        $scope.season = data;
    });
};

angular.module('ncs').controller('SeasonController', ['$scope', '$routeParams', 'SeasonService', SeasonController]);