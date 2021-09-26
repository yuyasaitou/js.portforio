'use strict'


{
    function callback(entries, obs) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
  
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      });
    }
  
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    const targets = document.getElementById('animate');
  
    
      observer.observe(targets);


    const topbtn= document.getElementById('js-top-btn');
      topbtn.addEventListener("click",()=>{
          window.scrollTo({
              top:0,
              behavior:"smooth",
          });
      });
  }


