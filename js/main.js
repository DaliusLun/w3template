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

// let box = document.querySelector('.totop__box');

document.querySelector(".totop__box").addEventListener("mouseover", mouseOver);
document.querySelector(".totop__box").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.querySelector(".toTopButton").classList.remove('noToTopButton');
}

function mouseOut() {
  document.querySelector(".toTopButton").classList.add('noToTopButton');
}






// let box = document.querySelector('.totop__box');
// let button = document.querySelector('.toTopButton');

// box.addEventListener('mouseover', () => {
 
//     if (button.className == 'toTopButton noToTopButton') {
//         button.classList.remove('noToTopButton');
//         console.log("tes");
        
//     } else {
//         button.classList.add('noToTopButton');
//         console.log("no");

//     }
// });


// totop button popout end
//----------------------------------------------

// let button = document.querySelector('.toTopButton');

// window.onload = initDivMouseOver;
// function initDivMouseOver()   {
//    let div = document.querySelector('.totop__box');
//    div.mouseIsOver = false;
//    div.onmouseover = function()   {
//       this.mouseIsOver = true;
//    };
//    div.onmouseout = function()   {
//       this.mouseIsOver = false;
//    }
//    div.onmouseover = function()   {
//       if (this.mouseIsOver)   {
//           button.classList.add('noToTopButton');
//           console.log("no");
//       } else {
//           button.classList.remove('noToTopButton');
//           console.log("yes");
//       }
//    }
// }


