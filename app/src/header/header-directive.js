var HeaderDirective = function(common) {
    return {
        templateUrl:  common.VIEW_PATH + '/header/header.html',
        link: function(scope) {

        }
    };
};

angular.module('ncs').directive('myHeader', ['COMMON', HeaderDirective]);