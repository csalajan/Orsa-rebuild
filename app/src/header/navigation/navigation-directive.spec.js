require('./navigation-directive.js');

describe('Navigation Directive', function() {
    var $compile,
        $rootScope;

    beforeEach(angular.mock.module("app"));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('is true', function() {
        var element = $compile("<div navigation></div>")($rootScope);
        expect(true).toBe(true);
    });
});