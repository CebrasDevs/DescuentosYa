//nos traemos el servidor con su configuracion
const app = require("./src/app");

//cargamos las variables de entorno guardados en .env
require('dotenv').config();
const { PORT } = process.env;

// y finalmente levantamos el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});