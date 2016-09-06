var PageService = function(ApiFactory, $q) {

    this.getSliderImages = function() {
        //return ApiFactory.getData('/slider/images');
        var deferred = $q.defer();
        deferred.resolve({
            status: 200,
            data: [
                {
                    title: "ORSE - It's Gonna be Big!",
                    image: "img/RLBanner.jpg"
                }
            ]
        });
        return deferred.promise;
    };

};

angular.module('ncs').service('PageService', ['ApiFactory', '$q', PageService]);