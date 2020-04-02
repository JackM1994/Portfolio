//Dom Variables Web
const headlineDiv = document.getElementById('headline');
const webDiv = document.getElementById('web-development');
console.log(webDiv);
const webHeader = document.getElementById('web-header');
console.log(webHeader);
const block = document.querySelector('.white-block');
console.log(block);
const webDescription = document.getElementById('web-dev-description');
console.log(webDescription);
//Web Section
// window.addEventListener('scroll', function(){
//     if(window.scrollY > (headlineDiv.offsetTop + headlineDiv.offsetHeight)){
//        webHeader.style.transition="opacity 2s";
//        webHeader.style.opacity="1";
//        block.style.transition="opacity 3s";
//        block.style.opacity="1";
//        webDescription.style.transition ="opacity 3.1s";
//        webDescription.style.opacity="1";
//     }
//     else if(window.scrollY < (headlineDiv.offsetTop + headlineDiv.offsetHeight)){
//         webHeader.style.transition="opacity 3.4s";
//         webHeader.style.opacity="0";
//         block.style.transition="opacity 3.4s";
//         block.style.opacity="0";
//         webDescription.style.transition="opacity 3.4s";
//         webDescription.style.opacity="0";
//     }
// });


//Dom variables mobile
const mobileDiv = document.getElementById('mobile-development');
const mobileHeader = document.getElementById('mobile-header');
const blockOne = document.querySelector('.white-block-1');
console.log(blockOne);
const mobileDescription = document.getElementById('mobile-dev-description');


//Mobile Section
// window.addEventListener('scroll', function(){
//     if (window.scrollY > (mobileDiv.offsetTop + mobileDiv.offsetHeight)){
//        mobileHeader.style.transition="opacity 2s";
//        mobileHeader.style.opacity="1";
//        blockOne.style.transition="opacity 2s";
//        blockOne.style.opacity="1";
//        mobileDescription.style.transition ="opacity 2.1s";
//        mobileDescription.style.opacity="1";
//     }
//     else if(window.scrollY < (mobileDiv.offsetTop + mobileDiv.offsetHeight)){
//         mobileHeader.style.transition="opacity 1.4s";
//         mobileHeader.style.opacity="0";
//         blockOne.style.transition="opacity 1s";
//         blockOne.style.opacity="0";
//         mobileDescription.style.transition="opacity 1.3s";
//         mobileDescription.style.opacity="0";
//     }
// });

//Dom variales maintenance
const mainDiv = document.getElementById('maintenance');
const mainHeader = document.getElementById('maintenance-header');
const blockTwo = document.querySelector('.white-block-2');
console.log(blockTwo);
const mainDescription = document.getElementById('main-dev-description');

//Mobile Section
window.addEventListener('scroll', function(){
    if (window.scrollY > (mainDiv.offsetTop + mainDiv.offsetHeight)){
       mainHeader.style.transition="opacity 3s";
       mainHeader.style.opacity="1";
       blockTwo.style.transition="opacity 3s";
       blockTwo.style.opacity="1";
       mainDescription.style.transition ="opacity 3.1s";
       mainDescription.style.opacity="1";
    }
    else if(window.scrollY < (mainDiv.offsetTop + mainDiv.offsetHeight)){
        mainHeader.style.transition="opacity 1.4s";
        mainHeader.style.opacity="0";
        blockTwo.style.transition="opacity 1s";
        blockTwo.style.opacity="0";
        mainDescription.style.transition="opacity 1.3s";
        mainDescription.style.opacity="0";
    }
});