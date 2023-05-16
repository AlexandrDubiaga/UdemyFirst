'use strict';




//const  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

/* metca: for(;;){
	const  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
	const personalMovieCount = numberOfFilms;
	if(numberOfFilms.length === 0 ){
		alert('Строка не может быть пустой!');
		continue metca;
	}else if(numberOfFilms.length > 50){
		alert('Строка не может быть длиннее чем 50 символов');
		continue metca;
	}else if(+personalMovieCount<= 10){
		alert('Просмотрено мало фильмов');
		break;
	}else if(+personalMovieCount> 10 && +personalMovieCount <= 30){
		alert('Вы класический зритель');
		break;
	}else if(+personalMovieCount > 30){
		alert('Вы киноман');
		break;
	}else{
		alert('Произошла ошибка');
		break;
	}	
}

alert('Выход из опросника по фильмам');
 */

const  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
let personalData ={
	personalMovieCount:numberOfFilms,
	movies:{

	}
};



mt:for (;;) {
	let a = prompt('Какие фильмы вы уже посмотрели?','');
	let b =  prompt('Реитинг этих фильмов?','');

	if(a != null && b != null && a!= '' && b != '' && a.length < 50 ){
		personalData.movies[a] = b;
		alert('Done');
		break;
	}else{
		alert('Error');
		continue mt;
	}
}

if(personalData.personalMovieCount < 10){
	alert('<10');
}
console.log(personalData);