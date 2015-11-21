var FooterDirective = function(common) {
    return {
        templateUrl:  common.VIEW_PATH + '/footer/footer.html',
        link: function() {

        }
    };
};

angular.module('app').directive('myFooter', ['COMMON', FooterDirective]);