'use strict';











/* let countOfFilms;



function start() {



	countOfFilms = +prompt('Сколько фильмов просмотрено?','');



	while(countOfFilms == '' || countOfFilms == null || isNaN(countOfFilms)){



		countOfFilms = +prompt('Сколько фильмов просмотрено?','');



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



console.log(personalMovieDB); */


/* const personalMovieDB = {
	count: countOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}; */

/* function copy(mainObj){
	let objCopy = {};
	let key;
	for (key in mainObj){
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a:2,
	b:5,
	c:{
		x:7,
		y:4
	}
};


const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;




const add = {
	d:17,
	e:20
};

console.log(Object.assign(numbers,add));

const clone = Object.assign({},add); */

/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){
		let str = '';
		for(let mainKeys in obj){
			if(typeof(obj[mainKeys])==='object'){
				for(let objKeys in obj[mainKeys]){
						if(objKeys === 'languages'){
							let lang = obj[mainKeys][objKeys].join(' ').toUpperCase();
							str += `Мне ${obj.age} и я владею языками: ${lang}`;
						}

				}

			}
		}
		return str;
      
    }
};





function showProgrammingLangs(plan) {
	let str = '';
	for (let key in plan){
		//console.log(plan[key]);
		if(typeof(plan[key])==='object'){
			for (let i in plan[key]){
				if(typeof(plan[key][i])==='object'){
					if(i==='programmingLangs'){
						if(Object.keys(plan[key][i]).length === 0){
							return str;
						}else{
							for (let m in plan[key][i]){
								str += ` "Язык ${m} изучен на ${plan[key][i][m]}" \n`;	
							}
						}
						
					}
				}
			}
		}
	}
	return str;

}

//console.log(showProgrammingLangs(personalPlanPeter));


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); */






//console.log(showExperience(personalPlanPeter));
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
	showAgeAndLangs: function(obj){
      	let {age} = obj;
		let {languages} = obj.skills;
		let str = '';
		let result = '';
		languages.forEach(function(element){
			str+=element+" ";
		});
		result = `Мне ${age} и я владею языками: ${str.toUpperCase()}`
		return result;
    }
};
function showProgrammingLangs(plan) {
	let {programmingLangs} = plan.skills;
	let str = '';

	for (let key in programmingLangs){
		str += `Язык ${key} изучен на ${lang[key]}\n`;
	}
	return str;
}

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
	if(arr.length === 0){
		str +='Семья пуста';
		return str;
	}else{
		str +='Семья состоит из: '+arr.join(" ");
		return str;
	}
	return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(item){
		console.log(item.toLowerCase());
	});
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
	if(typeof(str) !== 'string'){
		return "Ошибка!";
		
	}else{
		return str.split("").reverse().join("");
	}
	return str;
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr = baseCurrencies.concat(additionalCurrencies);
function availableCurr(arr, missingCurr) {
	let str = 'Доступные валюты:\n';
	if(arr.length === 0){
		return 'Нет доступных валют';
	}
	arr.forEach(function(item){
		if(item !== missingCurr){
			str+= item+'\n';
		}
	});
	return str;
}

console.log(availableCurr(arr,'RUB'));