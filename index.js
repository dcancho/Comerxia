const express = require('express');
const app = express();
const port = 3000;

// Ruta para servir archivos estáticos
app.use(express.static(__dirname));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación web está en funcionamiento en http://localhost:${port}`);
});