var HomeController = function($scope) {
    $scope.test = function() {
        return true;
    };

    $scope.articles = [
        {
            title: 'Test',
            submittedOn: '2015-11-20',
            author: {
                username: 'Thef'
            },
            summary: 'This is a test article',
            comments: 0
        },
        {
            title: "Nexient Championship Series Registration",
            submittedOn: '2015-11-12',
            author: {
                id: 2,
                username: 'Thef'
            },
            summary: '<iframe width="710" height="500" src="https://widget.toornament.com/tournaments/5643847f150ba00d568b4573/" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>',
            comments: 10
        }
    ];
};

angular.module('ncs').controller('HomeController', HomeController);