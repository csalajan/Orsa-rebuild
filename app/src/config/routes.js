angular.module('app').config(function($routeProvider, $locationProvider, COMMON) {
    $routeProvider
        .when('/', {
            templateUrl : COMMON.VIEW_PATH + '/home/home.html',
            controller : "HomeController"
        });
    //    .when('/about', {
    //        templateUrl : 'partials/about.html',
    //        controller : mainController
    //    })
    //    .when('/contact', {
    //        templateUrl : 'partials/contact.html',
    //        controller : mainController
    //    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}).run(function($rootScope, COMMON) {
    $rootScope.COMMON = COMMON;
});
