angular.module('ncs.accounts')
    .controller('FriendsController', require('./friends/friends-controller'))
    .controller('MessagesController', require('./messages/messages-controller'))
    .controller('ProfileController', require('./profile/profile-controller'))
    .controller('RegistrationController', require('./registration/registration-controller'))
    .controller('TeamsController', require('./teams/teams-controller'))
    .directive('LoginDirective', require('./user/login-directive'))
    .service('UserService', require('./user/user-service'));
