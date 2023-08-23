const express = require('express');
const cors = require('cors');
const app = express();

const config = require('./config/config');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const mensajeRoutes = require('./src/routes/mensajeRoutes');
const proyectoRoutes = require('./src/routes/proyectoRoutes'); 
const inversionRoutes = require('./src/routes/inversionRoutes'); 

const { generateHash, compareHash } = require('./src/middlewars/secure');
const secureMiddleware = require('./src/middlewars/secure').secureMiddleware;

app.use(cors());

app.use(express.json());

app.use(secureMiddleware.hashPassword); // Utiliza el middleware hashPassword

app.use('/usuario', usuarioRoutes);
app.use('/mensaje', mensajeRoutes); 
app.use('/proyecto', proyectoRoutes); 
app.use('/inversion', inversionRoutes); 



app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API backend Griinvest!');
});

app.listen(config.port, () => {
  console.log(`Servidor corriendo en http://localhost:${config.port}`);
});
