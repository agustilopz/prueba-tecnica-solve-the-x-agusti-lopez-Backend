/**
 * Punto de entrada del servidor.
 * 
 * - Importa la aplicación Express configurada.
 * - Inicia el servidor en el puerto 3000.
 * - Muestra un mensaje en consola cuando el servidor está activo.
 * 
 * Para cambiar el puerto, modifica el valor en app.listen().
 */

import app from './app';

app.listen(3000, () => {
  console.log('Servidor activo en el puerto 3000');
});
