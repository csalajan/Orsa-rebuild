var UsernameDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + "/forms/username.html",
        scope: {
            model: "="
        },
        require: '^form',
        link: function(scope, element, attrs, formCtrl) {
            scope.formName = formCtrl;
        }
    };
};

angular.module('ncs').directive('username', ['COMMON', UsernameDirective]);
