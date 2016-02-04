var TeamsService = function(ApiFactory) {

    this.getTeams = function() {
        return ApiFactory.getData('/teams');
    };
};

angular.module('ncs').service('TeamsService', ['ApiFactory', TeamsService]);
