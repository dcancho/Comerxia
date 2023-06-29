// @ts-check

/** @param {boolean} condicion  */
/** @param {string} ruta  */
function redirigir(condicion, ruta){
    if (condicion)
    {
        window.location.href = ruta;
    }
}