'use strict';

const options = {
	name:'test',
	width:1024,
	height: 1024,
	colors:{
		border:'black',
		bg:'red'
	}
};





for (let key in options) {
	if(typeof(options[key])==='object'){
		for (let i in options[key]){
			console.log(`Ключ: ${i} - Значение: ${options[key][i]}`);
		}
	}else{
		console.log(`Ключ: ${key} - Значение: ${options[key]}`);
	}

}
