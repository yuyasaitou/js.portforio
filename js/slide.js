'use strict'

{
    const next= document.getElementById('next');
    const prev= document.getElementById('prev');
    const ul = document.getElementById('slider-ul');
    const slides=ul.children;
    const dot=[];

    let currentIndex=0;

function upButton(){
    prev.classList.remove('hide');
    next.classList.remove('hide');
    if(currentIndex===0){
        prev.classList.add('hide');
    }
    if(currentIndex===slides.length - 1){
        next.classList.add('hide');
    }
}
function moveslide(){
    const slideWidth =slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-0.1*slideWidth*currentIndex}rem)`
    }

function setdot(){
    for (let i = 0; i < slides.length; i++) {
        const button=document.createElement('button');
        button.addEventListener('click', () => {
            currentIndex = i;
            dot.forEach(dots => {
            dots.classList.remove('current');
            });
            dot[currentIndex].classList.add('current');
            dotarrow();
            upButton();
            moveslide();
        });
        dot.push(button);
        document.querySelector('.indicater').appendChild(button); 
    }   
     dot.forEach(dots=>{
        dots.classList.add("nav-b");
     });
     dot[0].classList.add("current")
};

function dotarrow(){
            dot.forEach(dots => {
            dots.classList.remove('current');
            });
            dot[currentIndex].classList.add('current');
}

upButton();
setdot();

next.addEventListener('click',()=> {
      if(currentIndex<slides.length-1){
        currentIndex++;
      }else{
          currentIndex=0;
      }
        upButton();
        moveslide();
        dotarrow();
    });

prev.addEventListener('click',()=> {
        currentIndex--;
        upButton();
        moveslide();
        dotarrow();
    });
    
    function autoPlay() {
        setTimeout(() => {
            next.click();
            autoPlay();
          }, 3000);
      }


      window.addEventListener("load", () => {
        autoPlay();
      });
}


