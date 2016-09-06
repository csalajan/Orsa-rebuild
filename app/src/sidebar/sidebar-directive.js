var SidebarDirective = function(common, SeasonService) {
    return {
        templateUrl:  common.VIEW_PATH + '/sidebar/sidebar.html',
        link: function() {
            SeasonService.getActiveSeasons();
        }
    };
};

angular.module('ncs').directive('sidebar', ['COMMON', 'SeasonService', SidebarDirective]);