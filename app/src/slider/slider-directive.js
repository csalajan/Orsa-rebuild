var SliderDirective = function(common) {
    return {
        templateUrl:  common.VIEW_PATH + '/slider/slider.html',
        link: function() {

        }
    };
};

angular.module('app').directive('slider', ['COMMON', SliderDirective]);