var PageService = function(ApiFactory, $q) {

    this.getSliderImages = function() {
        //return ApiFactory.getData('/slider/images');
        var deferred = $q.defer();
        deferred.resolve({
            status: 200,
            data: [
                {
                    title: "ALT League - It's Gonna be Big!",
                    link: "https://www.toornament.com/tournaments/5643847f150ba00d568b4573/registration/new",
                    image: "http://www.nexientchampionshipseries.com/uploads/slides/1_image.png"
                }
            ]
        });
        return deferred.promise;
    };

};

angular.module('ncs').service('PageService', ['ApiFactory', '$q', PageService]);