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

/* personal.start();
personal.toggleVisibleMyDB();
personal.moviesStatus();
personal.checkMovie();
personal.writeYourgenres(); */

/* 
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}



function isBudgetEnough(data) {
	let arr = [];
	let sum = 0;
	let budjet = '';
	
	const {shops} = data;

	for (let value of shops) {
			arr.push(value.width * value.length ) ;
	  }
	
	arr.forEach((el)=>{
		sum+= el*data.height;
	});
	let moneyNeedForShopForHeat =  data.moneyPer1m3 * sum;
	if(data.budget > moneyNeedForShopForHeat){
		budjet+=`Бюджета достаточно`;
		return budjet;
	}else if(+data.budget < moneyNeedForShopForHeat){
		budjet+=`Бюджета недостаточно`;
		return budjet;
	}
	return budjet;


}

//console.log(isBudgetEnough(shoppingMallData));

const students = ['Momo','Rex','Koko','Rembo','Fox', 'Josh','Sonia', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Kill'];

function sortStudentsByGroups(arr) {
	let arrStudent = [];
	let str ='Оставшиеся студенты: ';
    let count = 0;
let size = 3; //размер подмассива
let subarray = []; //массив в который будет выведен результат.
arr.sort();
for (let i = 0; i <Math.ceil(arr.length/size); i++){
    subarray[i] = arr.slice((i*size), (i*size) + size);
}
subarray.forEach((el,i)=>{
	if(el.length <3){
		str+= el.join(', ');
		subarray.pop(el);
		subarray.push(str);
	}
});

let bool = subarray.some(elem => typeof(elem)==='string');  //
if(!bool){
	str+='-';
	subarray.push(str);
}

return subarray;

}

sortStudentsByGroups(students);

function hello(){
	console.log('Hello');
}
//hello();
function hi(){
	console.log('Say hi');
}
//hi();

const arr = [1,14,4,40,5];
let sorted = arr.sort(compareNum);


function compareNum(a ,b){
	return a-b;
} */
//console.log(sorted);


/* function getCounter (){
	let counter = 0;

	function strartCounter(){
		counter = counter + 1;
		return counter;
	}
	return strartCounter;
}

let increment = getCounter();
let c1 = increment();
let c2 = increment();
let c3 = increment();
console.log(c1, c2, c3); */







const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
	let first = +fDish.price.slice(0,-1);
	let second = +sDish.price.slice(0,-1);
	let newAverage = +average.slice(0,-1);

    if ((first + second) < newAverage) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
	let newObj = JSON.parse(JSON.stringify(copy));
    newObj.waitors[0] = {name: 'Mike', age: 32};
    return newObj;
}

transferWaitors(restorantData);


const data = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};


function copyDada(data){
	let copyObj = {};
	

	for(let value in data){
		copyObj[value] = data[value];
	}
	
	for(let key in copyObj){
		if(typeof(copyObj[key])==='object'){
			copyObj[key].forEach(()=>{
				copyObj[key] = [...copyObj[key]];
			});
		}

	}

	copyObj.menu[0] = {
		name: 'Alex',
		price: '20$'
	};
	copyObj.waitors[0] = {
		name: 'kila',
		age: 45
	};

	return copyObj;
}

console.log(copyDada(data));

console.log(data);