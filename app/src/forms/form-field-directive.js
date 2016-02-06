var FormFieldDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + "/forms/form-field.html",
        scope: {
            value: "=model",
            type: "@",
            required: "=",
            name: "@",
            label: "@",
            items: "="
        },
        require: '^form',
        link: function(scope, element, attrs, formCtrl) {
            scope.formName = formCtrl;
        }
    };
};

angular.module('ncs').directive('formField', ['COMMON', FormFieldDirective]);
