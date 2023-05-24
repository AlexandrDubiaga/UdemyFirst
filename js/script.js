'use strict';
let str = 'box';

//один єдлемент!!
const box = document.getElementById(str);
const oneHeart = document.querySelector('.heart');   //первый элемент
const wrapper = document.querySelector('.wrapper');   //первый элемент


//массывы элементов
const button = document.getElementsByTagName('button'); // массив кнопок
const circles = document.getElementsByClassName('circle');
const hearts = wrapper.querySelectorAll('.heart');  //forEach



/* 
box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.height = '300px'; */

button[1].style.borderRadius = '100%';

circles[1].style.backgroundColor = 'pink';

button[1].onclick = (e)=> {
	e.target.textContent = '25';
}

box.style.cssText = 'border-radius: 50%;background-color: maroon; width: 400px';

/* for(let i = 0; i < hearts.length; i++){
	hearts[i].style.backgroundColor = 'blue';
}
 */

hearts.forEach((el)=>{
	el.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
const text = document.createTextNode('Here was i');
div.classList.add('black');
wrapper.appendChild(div);

div.innerHTML = '<h1>Hello world</h1>';
div.textContent = 'Main';

//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello </h2>');







//wrapper.insertBefore(div,hearts[2]);
//wrapper.removeChild(hearts[1]);
//wrapper.replaceChild(circles[0],hearts[0]);

//wrapper.append(div);
//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);

//circles[0].remove();


//hearts[0].replaceWith(circles[0]);




