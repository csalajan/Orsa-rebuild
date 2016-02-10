angular.module('ncs').filter('rawHtml', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}]);
