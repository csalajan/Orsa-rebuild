var SliderDirective = function(common) {
    return {
        templateUrl:  common.VIEW_PATH + '/slider/slider.html',
        scope: {
            images: "=images"
        },
        link: function() {

        }
    };
};

angular.module('app').directive('slider', ['COMMON', SliderDirective]);