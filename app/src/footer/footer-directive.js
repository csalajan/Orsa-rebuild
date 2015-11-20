var FooterDirective = function() {
    return {
        templateUrl: 'app/src/footer/footer.html',
        link: function() {

        }
    };
};

angular.module('app').directive('myFooter', FooterDirective);