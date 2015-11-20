var HomeController = function($scope) {
    $scope.test = function() {
        return true;
    };
};

angular.module('app').controller('HomeController', HomeController);