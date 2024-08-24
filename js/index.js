document.addEventListener("DOMContentLoaded", function(){
    document.addEventListener("DOMContentLoaded", function(){
    let usuario = localStorage.getItem("user");
    if (usuario==null){ 
        location.href="login.html";
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
    window.onload = function() {
        // Verificar si el usuario está logueado
        const isLoggedIn = localStorage.getItem('loggedIn');
        
        // Si no está logueado, redirigir al login.html
        if (!isLoggedIn) {
          window.location.href = 'login.html';
        }
      };
})
});
