"use strict"

let burger = document.querySelector('.burger');
let navg = document.querySelector('.nav');
let head = document.querySelector('.header');

burger.addEventListener('click', () => {

    
    if (navg.className == 'nav on') {
        navg.classList.remove('on');
        burger.classList.add('fa-bars');
        burger.classList.remove('fa-times');
        
    } else {
        navg.classList.add('on');
        burger.classList.remove('fa-bars');
        burger.classList.add('fa-times');
        
    }
    
    

});
