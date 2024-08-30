document.addEventListener("DOMContentLoaded", function(){
    let usuario = localStorage.getItem("user");//recupero el usuario loggeado, si hay.
    if (usuario==null){ //si no hay nadie loggeado
        location.href="login.html";//lo mando a login.html
    }
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});