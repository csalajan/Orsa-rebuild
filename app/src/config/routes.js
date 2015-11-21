angular.module('app').config(function($routeProvider, $locationProvider, COMMON) {
    $routeProvider
        .when('/', {
            templateUrl : COMMON.VIEW_PATH + '/home/home.html',
            controller : "HomeController"
        })
        .when('/register', {
            templateUrl : COMMON.VIEW_PATH + '/accounts/registration/register.html',
            controller : "RegistrationController"
        });
    //    .when('/contact', {
    //        templateUrl : 'partials/contact.html',
    //        controller : mainController
    //    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}).run(function($rootScope, COMMON) {
    $rootScope.COMMON = COMMON;
});
