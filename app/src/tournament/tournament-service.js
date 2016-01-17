var TournamentService = function(ApiFactory) {
    var matches = [
        {
            id: 1,
            blueTeam: {
                name: 'TSM',
                nationality: '',
                logo: ''
            },
            redTeam: {
                name: 'CLG',
                nationality: '',
                logo: ''
            }
        },
        {
            id: 2,
            blueTeam: {
                name: 'SKT T1K',
                nationality: '',
                logo: ''
            },
            redTeam: {
                name: 'OG',
                nationality: '',
                logo: ''
            }
        },
        {
            id: 3,
            blueTeam: {
                name: 'DIG',
                nationality: '',
                logo: ''
            },
            redTeam: {
                name: 'CRS',
                nationality: '',
                logo: ''
            }
        },
        {
            id: 4,
            blueTeam: {
                name: 'FNC',
                nationality: '',
                logo: ''
            },
            redTeam: {
                name: 'CW',
                nationality: '',
                logo: ''
            }
        },
        {
            id: 5,
            blueTeam: {
                name: 'TL',
                nationality: '',
                logo: ''
            },
            redTeam: {
                name: 'TSM',
                nationality: '',
                logo: ''
            }
        }
    ];


    this.getLatestMatches = function() {
        return matches;
    };

    this.getUpcomingMatches = function() {
        return matches;
    };

    this.getMatchDetails = function(id) {
        return matches.filter(function(match) { return match.id == id;})[0];
    };
};

angular.module('ncs').service('TournamentService', ['ApiFactory', TournamentService]);
