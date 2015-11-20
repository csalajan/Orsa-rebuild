var HeaderDirective = function() {
    return {
        templateUrl: 'app/src/header/header.html',
        scope: {
            user: '=user'
        },
        link: function() {

        }
    };
};

angular.module('app').directive('myHeader', HeaderDirective);