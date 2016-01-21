var FriendsController = function($scope, UserService) {
    $scope.user = UserService.getUser();

};

angular.module('ncs').controller("FriendsController", FriendsController);
