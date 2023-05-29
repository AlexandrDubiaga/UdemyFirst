'use strict';
const btn = document.querySelectorAll('button');
//const overlay = document.querySelector('.overlay');

/* btn.onclick = (e)=>{
    if(+e.target.textContent === 1){
        e.target.textContent = 'Suck';
    }
   
}; */

let i = 0;
const deleteElement = (e) =>{
    console.log(e.currentTarget);
   /*  i++;
    if(i==1){
        btn.removeEventListener('click', deleteElement);
    } */
};



btn.forEach((e)=>{
    e.addEventListener('click',deleteElement,{once:true});
});
const link = document.querySelector('a');

link.addEventListener('click',(e)=>{
    e.preventDefault();
});


console.log(document.body.childNodes);

 console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode.parentNode);


console.log(document.querySelector('#current').parentNode.parentElement);

console.log(document.querySelector('[data-current="Milk"]').nextSibling);
console.log(document.querySelector('[data-current="Milk"]').previousSibling);
console.log(document.querySelector('[data-current="Milk"]').nextElementSibling); 

 document.body.childNodes.forEach((item)=>{
console.log(item);
}); 













