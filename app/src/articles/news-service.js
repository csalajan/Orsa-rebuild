var NewsService = function(ApiFactory) {

    this.getLatestNews = function() {
        return ApiFactory.getData('/news');
    };
};

angular.module('ncs').service('NewsService', ['ApiFactory', NewsService]);
