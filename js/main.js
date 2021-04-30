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


document.querySelector(".totop__box").addEventListener("mouseover", mouseOver);
document.querySelector(".totop__box").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelector(".toTopButton").classList.remove('noToTopButton');
}

function mouseOut() {
  document.querySelector(".toTopButton").classList.add('noToTopButton');
}

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

document.querySelector(".drop").addEventListener("mouseover", mouseOver);
document.querySelector(".drop").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelector(".dropdown").classList.add('on');

}

function mouseOut() {
  document.querySelector(".dropdown").classList.remove('on');

}

// dropdown end
//----------------------------------------------
