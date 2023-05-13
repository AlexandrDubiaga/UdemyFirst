'use strict';


let numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');


const personalMovieDB = {
	count : '',
	movies:{},
	actors:{},
	genres:[],
	privat:false
};
personalMovieDB['count'] = numbersOfFilms;

let lastFilm =  prompt('last Film?','');
let reiting =  prompt('reiting?','');


personalMovieDB['movies'][lastFilm]  = reiting ;

let lastFilmNext = prompt('last Film Next?','');
let reitingNext =  prompt('reitingNext?','');

personalMovieDB['movies'][lastFilmNext]  = reitingNext ;


console.log(personalMovieDB);


alert(personalMovieDB.movies +' '+personalMovieDB.movies.lastFilm);