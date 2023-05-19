'use strict';







const personalMovieDB = {
	
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start:function () {
		this.count = +prompt('Сколько фильмов просмотрено?','');
		while(this.count == '' || this.count == null || isNaN(this.count)){
			this.count = +prompt('Сколько фильмов просмотрено?','');
		}
	},
	moviesStatus:function (){
		for(let i = 0; i <=2; i++) {
			let a = prompt('Название фильма?','');
			let b = +prompt('Рейтинг?','');
	
			if(a != null && b != null && a != '' && b != '' && a.length < 50){
				this.movies[a] = b;
				console.log('Done');
			}else{
	
				console.log('Error');
				i--;
			}
	
		}
	},
	 checkMovie:function(){
		if(this.count < 10){
			alert('Мало фильмов');
		}else if(this.count > 10 && this.count < 30){
			alert('Средне фильмов');
		}else if(this.count > 30){
			alert('Много фильмов');
		}else{
			alert('Ошибка');
		}
	},
	 checkDB:function(param){
		if(!param){
			console.log('DB is active');
		}else{
			console.log('DB is denied');
		}
	},
	 writeYourgenres:function(){
		for(let i = 1; i <=2; i++) {
			let genre = prompt('Введите ваши любимые жанры через запятую','').toLocaleLowerCase();
			console.log(genre);
			if(genre!== null &&  genre !== '' ){
				this.genres = genre.split(', ');
				this.genres.sort();
				console.log('genre added');
			}else{
				console.log('Error genre added');
				i--;
			}
	
		}
		console.log(this.genres);
		this.genres.forEach((items, i)=>{
			console.log(`Любимый жанр ${i} -  ${items}\n`);
	});


	},
	toggleVisibleMyDB:function(){
		if(this.privat === true){
			this.privat = false;
			console.log('privat first ' + this.privat );
		}else{
			this.privat = true;
			console.log('privat second ' + this.privat );
			
		}
	},







};

const personal = new Object(personalMovieDB);

personal.start();
personal.toggleVisibleMyDB();
personal.moviesStatus();
personal.checkMovie();
personal.writeYourgenres();



