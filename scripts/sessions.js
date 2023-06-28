// @ts-check

import { baseDeDatosUsuarios } from "./database";

function iniciarSesion(nombreUsuario, contraseña) {
    var usuario = baseDeDatosUsuarios.getByNombreUsuario(nombreUsuario);
    if (usuario.contraseña === contraseña) {
        return true;
    }
    return false;
}