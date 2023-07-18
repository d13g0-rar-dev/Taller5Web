document.addEventListener("DOMContentLoaded", function () {

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const usuario = document.getElementById('usuario');
    const fe_nac = document.getElementById('fe_nac');
    const contrasena = document.getElementById('contrasena');
    const conf_contrasena = document.getElementById('conf_contrasena');
    const email = document.getElementById('email');
    const enfermedades = document.getElementById('enfermedades');
    const enf_si = document.getElementById('enf_si');
    const enf_no = document.getElementById('enf_no');
    const edad = document.getElementById('edad_fec');
    const errorNombre = document.getElementById('error-nombre');
    const errorApellido = document.getElementById('error-apellido');
    const errorUsuario = document.getElementById('error-usuario');
    const errorConf_usuario = document.getElementById('error-conf_usuario');
    const errorContrasena = document.getElementById('error-contrasena');
    const errorConf_contrasena = document.getElementById('error-conf_contrasena');

    nombre.addEventListener('input', function () {
        validarNombre();
    });

    apellido.addEventListener('input', function () {
        validarApellido();
    });

    fe_nac.addEventListener('input', function () {
        calcularEdad();
    });

    usuario.addEventListener('input', function () {
        validarUsuario();
    });

    conf_usuario.addEventListener('input', function () {
        validarConf_usuario();
    });

    contrasena.addEventListener('input', function () {
        validarContrasena();
    });

    conf_contrasena.addEventListener('input', function () {
        validarConf_contrasena();
    });

    enf_si.addEventListener('input', function () {
        validarEnfermedades_si();
    });

    enf_no.addEventListener('input', function () {
        validarEnfermedades_no();
    });


    function validarNombre() {
        if (nombre.value == null || nombre.value == '') {
            console.log('asdasd');
            nombre.classList.add('error');
            errorNombre.classList.add('show');
        } else {
            nombre.classList.remove('error');
            errorNombre.classList.remove('show');
        }
    }

    function validarApellido() {
        if (apellido.value == null || apellido.value == '') {
            apellido.classList.add('error');
            errorApellido.classList.add('show');
        } else {
            apellido.classList.remove('error');
            errorApellido.classList.remove('show');
        }
    }

    function calcularEdad() {
        var fechaNacimiento = new Date(fe_nac.value);
        var fechaActual = new Date();
        var edadMilisegundos = fechaActual.getTime() - fechaNacimiento.getTime();
        var edad = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
        edad_fec.innerHTML = "Usted tiene " + edad + " años.";
        edad_fec.classList.add('show');
    }

    function validarUsuario() {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (!alphanumericRegex.test(usuario.value)) {
            usuario.classList.add('error');
            errorUsuario.classList.add('show');
        } else {
            usuario.classList.remove('error');
            errorUsuario.classList.remove('show');
        }
    }


    function validarConf_usuario() {
        if (usuario.value !== conf_usuario.value) {
            conf_usuario.classList.add('error');
            errorConf_usuario.classList.add('show');
        } else {
            conf_usuario.classList.remove('error');
            errorConf_usuario.classList.remove('show');
        }
    }

    function validarContrasena() {
        const expresion = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
        if (!expresion.test(contrasena.value)) {
            contrasena.classList.add('error');
            errorContrasena.classList.add('show');
        } else {
            contrasena.classList.remove('error');
            errorContrasena.classList.remove('show');
        }
    }

    function validarConf_contrasena() {
        if (contrasena.value !== conf_contrasena.value) {
            conf_contrasena.classList.add('error');
            errorConf_contrasena.classList.add('show');
        } else {
            conf_contrasena.classList.remove('error');
            errorConf_contrasena.classList.remove('show');
        }
    }

    function validarEnfermedades_si() {
        if (enf_si.value) {
            enfermedades.classList.add('show');

        } else {
            enfermedades.classList.remove('show');
        }
    }

    function validarEnfermedades_no() {
        if (enf_no.value) {
            enfermedades.classList.remove('show');

        } else {
            enfermedades.classList.add('show');
        }
    }
})