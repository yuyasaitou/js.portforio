'use strict'
{
const smooth = document.querySelectorAll('a[href^="#"]');
for(let i =0; i<smooth.length; i++){
    smooth[i].addEventListener("click",(e)=>{
    e.preventDefault();
        let href = smooth[i].getAttribute('href');
        let targetElement= document.getElementById(href.replace('#',''));
        const rect =targetElement.getBoundingClientRect().top;
        const offset=window.pageYOffset;
        const gap=60;
        const target= rect+offset-gap;
window.scrollTo({
  top :target,
  behavior :'smooth',
    });
});
}
}