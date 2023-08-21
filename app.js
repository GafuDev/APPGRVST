const express = require('express');
const app = express();
const config = require('./config/config');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const { generateHash, compareHash } = require('./src/middlewars/secure'); // Corrección en la ruta
const secureMiddleware = require('./src/middlewars/secure').secureMiddleware; // Corrección en la ruta

app.use(express.json());

app.use('/usuario', usuarioRoutes);

app.use(secureMiddleware.hashPassword); // Utiliza el middleware hashPassword

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API backend Griinvest!');
});

app.listen(config.port, () => {
  console.log(`Servidor corriendo en http://localhost:${config.port}`);
});
