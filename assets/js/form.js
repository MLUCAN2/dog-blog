// handles the submit function for the submit button-includes a timeout for the error message
function handleSubmit (event){
    event.preventDefault();
    const username= document.querySelector('#username').value .trim();
    const title= document.querySelector('#title').value .trim();
    const comment= document.querySelector('#comment').value .trim()
    
if (!username||!title||!comment){
    const errorEl=document.querySelector("#error")
    errorEl.textContent="please complete the entire form"
    setTimeout(() => {
        errorEl.textContent=""
    },3000);
    return
}
//Saves the form data to the local storage
const data={username:username, title:title, comment:comment}
handleSave(data)
location.href="blog.html"
}

function handleSave(data){
    const blogs=JSON.parse(localStorage.getItem("blogs"))||[]
    blogs.push(data)
    localStorage.setItem("blogs", JSON.stringify(blogs))
}

document.querySelector("#form").addEventListener("submit", handleSubmit)