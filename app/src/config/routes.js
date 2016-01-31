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
        })
        .when('/groups', {
            templateUrl : COMMON.VIEW_PATH + '/tournament/groups/groups.html',
            controller: 'GroupsController'
        })
        .when('/profile', {
            templateUrl: COMMON.VIEW_PATH + '/accounts/profile/profile.html',
            controller: 'ProfileController'
        })
        .when('/messages', {
            templateUrl: COMMON.VIEW_PATH + '/accounts/messages/messages.html',
            controller: 'MessagesController'
        })
        .when('/friends', {
            templateUrl: COMMON.VIEW_PATH + '/accounts/friends/friends.html',
            controller: 'FriendsController'
        })
        .when('/teams', {
            templateUrl: COMMON.VIEW_PATH + '/accounts/teams/teams.html',
            controller: 'TeamsController'
        })
        .when('/tournaments', {
            templateUrl: COMMON.VIEW_PATH + '/tournament/tournaments.html',
            controller: 'TournamentsController'
        })
        .when('/tournament/:id', {
            templateUrl: COMMON.VIEW_PATH + '/tournament/tournament-page.html',
            controller: 'TournamentPageController'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push('AuthInterceptor');
}).run(function($rootScope, $window, COMMON, UserService) {
    $rootScope.COMMON = COMMON;

    if ($window.sessionStorage.token) {
        UserService.verifyUser($window.sessionStorage.token);
    }
});
