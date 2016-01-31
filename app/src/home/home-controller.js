var HomeController = function($scope, NewsService) {

    $scope.articles = [];

    NewsService.getLatestNews().then(function(data) {
        $scope.articles = data;
    });
};

angular.module('ncs').controller('HomeController', ['$scope', 'NewsService', HomeController]);