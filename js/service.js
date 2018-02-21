filmApp.service("FilmService", FilmService);
FilmService.$inject = ["$http"];
function FilmService($http){
    this.url ="http://www.snagfilms.com/apis/films.json?limit=10";
    this.getFilms = function(){
        return $http.get(this.url);
    }
}