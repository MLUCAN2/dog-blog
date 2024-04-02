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