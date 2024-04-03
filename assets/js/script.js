console.log (window);
console.log(window.document)


// Light/Dark Mode Toggle Section
const themeSwitcher= document.querySelector('#theme-switcher');
const containter= document.querySelector('.container');

let mode = 'dark'

themeSwitcher.addEventListener('click',function (){
    if(mode === 'dark'){
        mode = 'light';
        containter.setAttribute('class', 'light')
    }
    else{
        mode= 'dark';
        containter.setAttribute('class', 'dark')
    }
})
