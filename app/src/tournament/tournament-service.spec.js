require('./tournament-service.js');

var matches = [
    {
        id: 1,
        status: 'pending',
        opponents: [
            {
                participant: {}
            },
            {
                participant: {}
            }
        ]
    },
    {
        id: 2,
        status: 'completed',
        opponents: [
            {
                participant: {}
            },
            {
                participant: {}
            }
        ]
    }
];

describe('Tournament Service', function() {
    var tournamentService, $http, $q, $rootScope;

    beforeEach(angular.mock.module('ncs'));

    beforeEach(inject(function (_TournamentService_, $httpBackend, _$q_, _$rootScope_) {
        tournamentService = _TournamentService_;
        $http = $httpBackend;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
        $http.when('GET', '/api/tournament/matches').respond(matches);
    });

    describe('Latest Matches', function() {
        it('returns latest matches', function(done) {
            $rootScope.$on('matches-updated', function() {
                var latest = tournamentService.getLatestMatches();
                expect(latest[0]).toEqual(matches[1]);
                done();
            });

            $http.flush();
        });
    });

    describe('Upcoming Matches', function() {
        it('returns upcoming matches', function(done) {
            $rootScope.$on('matches-updated', function() {
                var latest = tournamentService.getUpcomingMatches();
                expect(latest[0]).toEqual(matches[0]);
                done();
            });

            $http.flush();
        });
    });

    describe('Match Details', function() {
        it('returns upcoming matches', function(done) {
            $rootScope.$on('matches-updated', function() {
                var latest = tournamentService.getMatchDetails(1);
                expect(latest).toEqual(matches[0]);
                done();
            });

            $http.flush();
        });
    });
});