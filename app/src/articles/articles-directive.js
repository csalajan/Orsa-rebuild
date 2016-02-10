var ArticlesDirective = function(common) {
    return {
        templateUrl: common.VIEW_PATH + '/articles/articles.html',
        scope: {
            articles: '=items'
        },
        link: function() {

        }
    };
};

angular.module('ncs').directive('articles', ['COMMON', ArticlesDirective]);
