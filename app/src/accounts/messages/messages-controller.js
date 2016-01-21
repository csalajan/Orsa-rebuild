var MessagesController = function($scope, UserService) {
    $scope.user = UserService.getUser();

};

angular.module('ncs').controller("MessagesController", MessagesController);