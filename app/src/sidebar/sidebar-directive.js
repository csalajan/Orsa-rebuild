var SidebarDirective = function(common) {
    return {
        templateUrl:  common.VIEW_PATH + '/sidebar/sidebar.html',
        link: function() {

        }
    };
};

angular.module('app').directive('sidebar', ['COMMON', SidebarDirective]);