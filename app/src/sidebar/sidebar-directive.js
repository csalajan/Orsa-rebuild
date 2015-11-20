var SidebarDirective = function() {
    return {
        templateUrl: 'app/src/sidebar/sidebar.html',
        link: function() {

        }
    };
};

angular.module('app').directive('sidebar', SidebarDirective);