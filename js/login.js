

document.addEventListener("DOMContentLoaded", function() {
    // Datos
    const formulario = document.getElementById('miFormulario');
    const nombreInput = document.getElementById('Nombre');
    const contraseñaInput = document.getElementById('password');
    const nombreError = document.getElementById('nombreError');
    const contraseñaError = document.getElementById('contraseñaError');
    const nombreErrorContenedor = nombreError.parentElement;
    const contraseñaErrorContenedor = contraseñaError.parentElement;

    // mostrar mensaje de error
    function mostrarError(elementoError, contenedorError, mensaje) {
        elementoError.textContent = mensaje;
        contenedorError.style.display = 'block'; //contenedor
    }

    //ocultar mensaje
    function ocultarError(elementoError, contenedorError) {
        elementoError.textContent = '';
        contenedorError.style.display = 'none'; // Ocultar contenedor(dolor de cabeza hacer esto)
    }

    // Validaciones
    function validarFormulario(event) {
        let valido = true;

        
        if (nombreInput.value.trim() === '') {
            mostrarError(nombreError, nombreErrorContenedor, 'El nombre de usuario es requerido.');
            valido = false;
        } else {
            ocultarError(nombreError, nombreErrorContenedor);
        }


        if (contraseñaInput.value.trim() === '') {
            mostrarError(contraseñaError, contraseñaErrorContenedor, 'La contraseña es requerida.');
            valido = false;
        } else if (contraseñaInput.value.length < 6) {
            mostrarError(contraseñaError, contraseñaErrorContenedor, 'La contraseña debe tener al menos 6 caracteres.');
            valido = false;
        } else {
            ocultarError(contraseñaError, contraseñaErrorContenedor);
        }
    }
    formulario.addEventListener('submit', validarFormulario)
}); 
