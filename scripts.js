const cont = document.getElementsByClassName(".container");
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
const noselecionar = document.querySelector(".noseleccionar")
btn.onclick = () =>{
    widget.style.display = "none";
    post.style.display ="block";
    editBtn.onclick= () =>{
        widget.style.display ="block";
        post.style.display ="none";
    }
    return false;
}

window.addEventListener("click", function (e) {
//capturo cualquier click en cualquier sitio "e" es el nombre argument
if (!document.getElementById("rate").contains(e.target)) {
//si el click NO está dentro del div, limpiar todo
location.reload();
}
});
