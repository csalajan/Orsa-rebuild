var PasswordVerifyDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + "/forms/password-verify.html",
        scope: {
            passwordVal: "=",
            model: "="
        },
        require: ['^form', 'ngModel'],
        link: function(scope, element, attrs, ctrls) {

            scope.formName = ctrls[0];
        }
    };
};

angular.module('ncs').directive('vpassword', ['COMMON', PasswordVerifyDirective]);