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
});
// Simula un estado de autenticación
let isAuthenticated = false; // Cambia esto a true cuando el usuario inicie sesión

// Verifica si el usuario está autenticado
if (!isAuthenticated) {
    // Si no está autenticado, redirige a la página de login
    window.location.href = "login.html"

// Simula un estado de autenticación
let isAuthenticated = false; // Cambia esto a true cuando el usuario inicie sesión

// Verifica si el usuario está autenticado
if (!isAuthenticated) {
    // Si no está autenticado, redirige a la página de login
    window.location.href = "login.html"

// Simula un estado de autenticación
let isAuthenticated = false; // Cambia esto a true cuando el usuario inicie sesión

// Verifica si el usuario está autenticado
if (!isAuthenticated) {
    // Si no está autenticado, redirige a la página de login
    window.location.href = "login.html";
}}
}
});
