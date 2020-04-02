// DOM Variables 
const header = document.getElementById('headline');
const container = document.getElementById('first-container');
const secondContainer = document.getElementById('second-container');
const meIntro = document.getElementById('i-intro');
const smallIntro = document.getElementById('small-intro');
const arrow = document.getElementById('arrow-down');
console.log(header);
const intro = document.getElementById('intro-container');
console.log(intro);


//create a function to show that the user has scrolled down

    
        window.addEventListener('scroll', function(){
            if(window.scrollY >.5){
               
                container.style.background ="";
                container.style.transition="width 2s";
                container.style.width="1100%";
                secondContainer.style.transition="opacity 1s";
                secondContainer.style.opacity="0";
                meIntro.style.transition="opacity 2s";
                meIntro.style.opacity="1";
                smallIntro.style.opacity="1";
                arrow.style.display="none";

            }  
            else if(window.scrollY <.1){
                container.style.background ="";
                container.style.width ="50%";
                secondContainer.style.transition="opacity 1s";
                secondContainer.style.opacity="1";
                meIntro.style.transition="opacity .3s";
                meIntro.style.opacity="0";
                smallIntro.style.transition="opacity .3s";
                smallIntro.style.opacity="0";
               
                arrow.style.display="block";
            }
        })     
