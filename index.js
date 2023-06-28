// @ts-check

//load database from files "userData.json" and "productData.json"

import { baseDeDatosUsuarios, Usuario } from './scripts/database';

baseDeDatosUsuarios.add(new Usuario());

/** @param {boolean} condicion  */
/** @param {string} direccion  */
function redirigir(condicion, direccion)
{
    if(condicion)
    {
        //redirigir a nueva pagina
        window.location.href=direccion;
    }
    else
    {
        alert("Usuario o contraseña incorrectos");
    }
}