document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault();

        const recaptchaResponse = grecaptcha.getResponse();
        const nombre1= document.getElementById('1nombre').value.trim();
        const nombre2 = document.getElementById('2nombre').value.trim();
        const fecha = document.getElementById('fecha').value.trim();
        const email = document.getElementById('Email').value.trim();

        if (recaptchaResponse.length === 0) {
            alert('Completar el captcha');
            return;
        }
        alert('Bienvenido');
        if (!nombre1 || !nombre2){
            alert('El aplicante debe de tener 1er nombre y 2do nombre')
        }else if(!validarFecha(fecha)){
            alert('Ingrese un formato de fecha valido dd/mm/yyyy o menor o igual que 2024');
        }
        else if(!email.includes('@')) {
            alert('Ingrese un correo electrónico válido');
            return;
        }else{
            alert('Informacion Aceptada'); 
        }
    });
});
function validarFecha(fechaI) {
    const partes = fechaI.split('/');
    if (partes.length !== 3){
        return false;
    }

    const dia = parseInt(partes[0],10);
    const mes = parseInt(partes[1],10);
    const anio = parseInt(partes[2],10);

    if(isNaN(dia) || isNaN(mes)|| isNaN(anio)){
        return false;
    }

    if(partes[2].length !== 4){
        return false;
    }
    if (anio > 2024) {
        return false;
    }
    const fecha = new Date(anio, mes - 1, dia);

    return(
        fecha.getDate() == dia &&
        fecha.getMonth() ==  (mes - 1) &&
        fecha.getFullYear() === anio
    );
}
