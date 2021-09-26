'use strict';

{
     const navBtn=document.getElementById('js-nav-btn');
     const nav=document.querySelector('nav');
     const open=document.querySelector('batu')
     const close=document.querySelector('nav-icon')

     navBtn.addEventListener('click',()=>{
        nav.classList.toggle('show');
     });
}