var LoaderDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + "/loader/loader.html",
        scope: {
            watch: '='
        },
        link: function(scope) {
            scope.isEmpty = function() {
                return angular.equals(scope.watch, {});
            };
        }
    };
};

angular.module('ncs').directive('loader', ['COMMON', LoaderDirective]);
