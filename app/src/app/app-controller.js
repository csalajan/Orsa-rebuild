var AppController = function($scope, PageService) {
    $scope.sliderImages = [];

    var getSliderImages = function() {
        PageService.getSliderImages().then(function(response) {
            $scope.sliderImages = response.data;
        });
    };
    var init = function() {
        getSliderImages();
    };

    init();
};

angular.module('ncs').controller('AppController', ['$scope', 'PageService', AppController]);