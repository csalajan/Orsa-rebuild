var SliderDirective = function() {
    return {
        templateUrl: 'app/src/slider/slider.html',
        link: function() {

        }
    };
};

angular.module('app').directive('slider', SliderDirective);