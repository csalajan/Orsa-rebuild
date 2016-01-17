angular.module('ncs').config(function($routeProvider, $locationProvider, COMMON, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl : COMMON.VIEW_PATH + '/home/home.html',
            controller : "HomeController"
        })
        .when('/register', {
            templateUrl : COMMON.VIEW_PATH + '/accounts/registration/register.html',
            controller : "RegistrationController"
        })
        .when('/match/:id', {
            templateUrl : COMMON.VIEW_PATH + '/tournament/matches/match.html',
            controller : 'MatchController'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push('AuthInterceptor');
}).run(function($rootScope, COMMON) {
    $rootScope.COMMON = COMMON;
});
