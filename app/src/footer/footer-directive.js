var FooterDirective = function(common) {
    return {
        templateUrl:  common.VIEW_PATH + '/footer/footer.html',
        link: function() {

        }
    };
};

angular.module('ncs').directive('myFooter', ['COMMON', FooterDirective]);