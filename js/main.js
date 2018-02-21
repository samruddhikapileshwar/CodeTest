var filmApp = angular.module("filmApp", []);
filmApp.controller("filmCtrl", filmCtrl);
filmCtrl.$inject = ["FilmService", "$sce"]
function filmCtrl(FilmService, $sce){
    var vm = this;
    vm.filmData;
    vm.films=[];
    vm.getFilms = function(){
        FilmService.getFilms()
            .then(function(successResponse){
                vm.filmData = successResponse.data.films;
                vm.films = vm.filmData.film;
                vm.films.forEach(element => {
                    element.renditions.rendition[0].url = $sce.trustAsHtml(element.renditions.rendition[0].url);
                });
             
            }, function(errorResponse){
                console.error(errorResponse);
            });
    };

    vm.getFilms();
}