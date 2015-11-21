var PasswordDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + "/forms/password.html",
        scope: {
            model: "="
        },
        require: '^form',
        link: function(scope, element, attrs, formCtrl) {
            scope.formName = formCtrl;
        }
    };
};

angular.module('app').directive('password', ['COMMON', PasswordDirective]);