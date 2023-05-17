'use strict';











let countOfFilms;



function start() {



	countOfFilms = +prompt('Сколько фильмов просмотрено?','').trim();



	while(countOfFilms == '' || countOfFilms == null || isNaN(countOfFilms)){



		countOfFilms = +prompt('Сколько фильмов просмотрено?','').trim();



	}



}



start();



const personalMovieDB = {



	count: countOfFilms,



	movies: {},



	actors: {},



	genres: [],



	privat: false



};







function moviesStatus(){



	for(let i = 0; i <=2; i++) {

		let a = prompt('Название фильма?','').trim();

	    let b = +prompt('Рейтинг?','').trim();



		if(a != null && b != null && a != '' && b != '' && a.length < 50){

			personalMovieDB.movies[a] = b;

			console.log('Done');

		}else{

		

			console.log('Error');

			i--;

		}



	}

}



moviesStatus();



function checkMovie(){

	if(personalMovieDB.count < 10){

		alert('Мало фильмов');

	}else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){

		alert('Средне фильмов');

	}else if(personalMovieDB.count > 30){

		alert('Много фильмов');

	}else{

		alert('Ошибка');

	}

}





checkMovie();



function checkDB(param){

	if(!param){

		console.log('DB is active');

	}else{

		console.log('DB is denied');

	}

}



checkDB(personalMovieDB.privat);







function writeYourgenres(){

	for(let i = 1; i <=3; i++) {

		let genre = +prompt('Любимый жанр под номером?','').trim();

		if(genre!= null &&  genre != '' ){

			personalMovieDB.genres[i-1] = genre;

			console.log('genre added');

		}else{

			console.log('Error genre added');

			i--;

		}



	}

}

writeYourgenres();



console.log(personalMovieDB);