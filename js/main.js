"use strict"

let burger = document.querySelector('.burger');
let navg = document.querySelector('.nav');

burger.addEventListener('click', () => {

    
    if (navg.className == 'nav on') {
        navg.classList.remove('on'); 
    } else {
        navg.classList.add('on');

    }
    
    

});
