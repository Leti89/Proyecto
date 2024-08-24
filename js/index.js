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
    // Función para verificar si el usuario está autenticado
   function checkAuth() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    // Si no hay sesión, redirigir al login
    if (!isAuthenticated) {
        window.location.href = 'login.html'; // Redirigir al login
    }
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', checkAuth);
})
});
