var HeaderDirective = function(common) {
    return {
        templateUrl:  common.VIEW_PATH + '/header/header.html',
        scope: {
            user: '=user'
        },
        link: function() {

        }
    };
};

angular.module('app').directive('myHeader', ['COMMON', HeaderDirective]);