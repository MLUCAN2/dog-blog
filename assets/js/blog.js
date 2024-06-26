console.log (window);
console.log(window.document)

//Back button to go back to previous page
function handleBack(event){
    event.preventDefault();
    window.history.back();
}
// Links the back button on the page and gives it an event listener (the 'click')
const backButon= document.getElementById('back-button');
backButon.addEventListener('click',handleBack);


// Light/Dark Mode Toggle Section
const themeSwitcher= document.querySelector('#theme-switcher');
console.log ('themeSwitcher')
const containter= document.querySelector('.container');
let mode= 'dark'
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
// Blog section-updates the blog page by pulling from local storage
function displayBlogs (){
    const blogs=JSON.parse(localStorage.getItem("blogs"))||[]
    const blogsEl=document.querySelector("#blogs")
    blogsEl.innerHTML=""
    for(let i=0;i<blogs.length;i++){
        const cardEl=document.createElement('div')
        const titleEl=document.createElement('h3')
        const userEl=document.createElement('p')
        const commentEl=document.createElement('p')
        cardEl.classList.add('card')
        titleEl.textContent=blogs[i].title
        userEl.textContent=`posted by: ${blogs[i].username}`
        commentEl.textContent=blogs[i].comment
        cardEl.append(titleEl,commentEl,userEl)
        blogsEl.append(cardEl)
    }


}
displayBlogs()