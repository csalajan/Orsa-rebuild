var EditProfileController = function($scope, $location, COMMON, UserService) {
    $scope.user = UserService.getUser();
    $scope.profileUser = angular.extend({}, $scope.user);

    $scope.genders = COMMON.PROFILE.GENDERS;

    $scope.$on('user-login', function() {
        $scope.user = UserService.getUser();
        $scope.profileUser = angular.extend({}, $scope.user);
    });

    $scope.updateProfile = function(user) {
        UserService.updateUser(user).then(function() {
            $location.path('/profile');
        });
    };

};

angular.module('ncs').controller("EditProfileController", EditProfileController);