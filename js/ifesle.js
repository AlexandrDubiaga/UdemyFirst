'use strict';

function calculateVolumeAndArea(param) {
	let j = +param;
	let s =6*(j*j);
	let v =j*j*j;
	if(j < 0 || j == '' || typeof(j) != 'number' || j==null || isNaN(j) || !Number.isInteger(j)){
		console.log( 'При вычислении произошла ошибка');
	}else{
		console.log(`V: ${v}`);
		console.log('\n');
		console.log(`S: ${s}`);
	}
	
	

}

calculateVolumeAndArea(5);


function getCoupeNumber(param) {
	let j = +param;
	if(j < 0 || j == '' || typeof(j) != 'number' || j==null || isNaN(j) || !Number.isInteger(j) ){
		return 'Ошибка. Проверьте правильность введенного номера места';
	}else if(j<0 || j>36){
		return 'Таких мест в вагоне не существует';
	}
}

getCoupeNumber(2);


function getTimeFromMinutes(param) {
	let j = +param;
	

	if(j < 0 || j === '' || typeof(j) != 'number' || j===null || isNaN(j) || !Number.isInteger(j) || j>600 ){
		return 'Ошибка, проверьте данные';
	}
	let hours = Math.trunc(j/60);
	let minutes = j % 60;
	let x = '';
	if(hours === 0 || hours === 5 || hours === 6 || hours === 7 || hours === 8 || hours === 9 || hours === 10 ){
		x='часов';
	}else if(hours ===1){
		x='час';
	}else if(hours >1 && hours <5){
		x='часа';
	}
	return `Это ${hours} ${x} и ${minutes} минут`; 
}


console.log(getTimeFromMinutes(0));

// Место для второй задачи
function findMaxNumber(a,b,c,d) {
	if(typeof(a) ==='undefined' || typeof(b) ==='undefined' || typeof(c) ==='undefined' || typeof(d) ==='undefined'){
		return 0;
	}
	if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c)
     !== 'number' || typeof(d) !== 'number'){
		return 0;
	}
	let first = +Math.round(a);
	let second = +Math.round(b);
	let third = +Math.round(c);
	let fourth = +Math.round(d);

	
	return Math.max(first,second,third,fourth);
	

}

findMaxNumber(22, 6.6, 8, 11);
//Math.round();

