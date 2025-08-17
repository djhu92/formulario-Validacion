// script.js
// Este script valida un formulario de contacto con campos de texto y un campo de correo electrónico
let submitFunction = (event) => {
    if(!validarFormulario()) {
        event.preventDefault(); // Evita el envío del formulario si la validación falla
    }else {
        event.preventDefault();
        alert(
            ' Los datos ingresados son:\n' +

           'Nombre: ' + document.getElementById('nombre').value + '\n' +
           'Apellido: ' + document.getElementById('apellido').value + '\n' +
           'Documento: ' + document.getElementById('documento').value + '\n' +
           'email: ' + document.getElementById('email').value + '\n' +
           'Edad: ' + document.getElementById('edad').value + '\n' +
           'actividad: ' + document.getElementById('actividad').value + '\n' +
           'Nivel de estudios: ' + document.getElementById('nivelEstudio').value + '\n' 
          
        );
    }
}
// Agrega el evento de envío al formulario
document.getElementById('formulario').addEventListener('submit', submitFunction);




// Esto valida los campos de texto del formulario
function validarFormulario() {
    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length == '') {
            mostrarError(errorCampo, 'Este campo es requerido');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });


    // Esto valida el campo de correo electrónico

    let email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // REGEX-  Valida el formato del correo electrónico sea valido
         ocultarError(errorEmail);
    }else {
        mostrarError(errorEmail, 'Por favor, ingrese un correo electrónico válido');
    }



    let Edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if(Edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 años para enviar el formulario');
        validacionCorrecta = false;
    }else {
        ocultarError(errorEdad);
    }


    // validacion de la actividad
    let actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if(actividad.value == '') {
        mostrarError(errorActividad, 'Por favor, selecciona una actividad');
        validacionCorrecta = false;
    }
    else {
        ocultarError(errorActividad);
    }   


    //validacion de nivel de estudios
    let nivelEstudios = document.getElementById('nivelEstudio');
    let errorNivelEstudios = document.getElementById('errorNivelEstudio');

    if(nivelEstudios.value == '') {
        mostrarError(errorNivelEstudios, 'Por favor, selecciona un nivel de estudios');
        validacionCorrecta = false;
    }
    else {
        ocultarError(errorNivelEstudios);
    }

// Validar los terminos y condiciones
    let terminos = document.getElementById('aceptoTerminos');
    let errorTerminos = document.getElementById('errorAceptoTerminos');

    if(!terminos.checked) {
        mostrarError(errorTerminos, 'Debes aceptar los términos y condiciones');
        validacionCorrecta = false;
    } else {
        ocultarError(errorTerminos);
    }
    return validacionCorrecta; // esto dita si el formulario es válido o no

   
  // valida 

}






let mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

let ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}
