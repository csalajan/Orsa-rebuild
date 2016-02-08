var TeamsService = function(ApiFactory) {

    this.getTeams = function() {
        return ApiFactory.getData('/teams');
    };

    this.getTeam = function(id) {
        return ApiFactory.getData('/teams/find/'+id);
    };
};

angular.module('ncs').service('TeamsService', ['ApiFactory', TeamsService]);
