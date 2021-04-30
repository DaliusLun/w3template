"use strict"

//----------------------------------------------
// burger beggining

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

// burger end
//----------------------------------------------




//----------------------------------------------
// scroll totop beggining

document.getElementById('totop').addEventListener('click', function() {
    location.href = '#top'
}, false);


// scroll totop end
//----------------------------------------------




//----------------------------------------------
// totop button popout beggining


let box = document.querySelector(".totop__box");
let button = document.querySelector(".toTopButton");


box.addEventListener('mouseover', () => {
  button.classList.remove('noToTopButton');
});

box.addEventListener('mouseleave', () => {
  button.classList.add('noToTopButton');
});


// totop button popout end
//----------------------------------------------



//----------------------------------------------
// sidemenu beggining

let menu = document.querySelector('.side__menu');
let plus = document.querySelector('.main__plusbox');
let closeButton = document.querySelector('.close');


plus.addEventListener('click', () => {
 
  menu.classList.add('side__menuON');

});

closeButton.addEventListener('click', () => {
 
  menu.classList.remove('side__menuON');

});

// sidemenu end
//----------------------------------------------




//----------------------------------------------
// dropdown beggining

let drop = document.querySelector(".drop");
let dropdown = document.querySelector(".dropdown");


drop.addEventListener('mouseover', () => {
  dropdown.classList.add('on');
});

drop.addEventListener('mouseleave', () => {
  dropdown.classList.remove('on');
});


// dropdown end
//----------------------------------------------



