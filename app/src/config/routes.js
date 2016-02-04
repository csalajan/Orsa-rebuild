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
        .when('/team', {
            templateUrl: COMMON.VIEW_PATH + '/accounts/teams/team.html',
            controller: 'TeamController'
        })
        .when('/teams', {
            templateUrl: COMMON.VIEW_PATH + '/teams/teams.html',
            controller: 'TeamsController'
        })
        .when('/tournaments', {
            templateUrl: COMMON.VIEW_PATH + '/tournament/tournaments.html',
            controller: 'TournamentsController'
        })
        .when('/tournament/:id', {
            templateUrl: COMMON.VIEW_PATH + '/tournament/tournament-page.html',
            controller: 'TournamentPageController'
        })
        .when('/tournament/:id/participants', {
            templateUrl: COMMON.VIEW_PATH + '/tournament/participants/participants.html',
            controller: 'ParticipantsController'
        })
        .when('/tournament/:id/groups', {
            templateUrl : COMMON.VIEW_PATH + '/tournament/groups/groups.html',
            controller: 'GroupsController'
        })
        .when('/tournament/:id/brackets', {
            templateUrl : COMMON.VIEW_PATH + '/tournament/brackets/bracket.html',
            controller: 'BracketController'
        })
        .when('/tournament/:id/rules', {
            templateUrl : COMMON.VIEW_PATH + '/tournament/rules/rules.html',
            controller: 'RulesController'
        })
        .when('/tournament/:id/prizes', {
            templateUrl : COMMON.VIEW_PATH + '/tournament/prizes/prizes.html',
            controller: 'PrizesController'
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
