var MatchController = function($scope, $routeParams, SeasonService) {
    $scope.matchResult = {
        1: 'Victory',
        2: 'Draw',
        3: 'Defeat'
    };

    $scope.matchFormats = {
        "bo5": "Best of 5",
        "bo3": "Best of 3",
        "one": "Best of 1"
    };

    $scope.match = SeasonService.getMatchDetails($routeParams.id);
};

angular.module('ncs').controller('MatchController', ['$scope', '$routeParams', 'SeasonService', MatchController]);
