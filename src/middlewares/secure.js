const simplecrypt = require("simplecrypt");
var sc = simplecrypt();



async function generateHash(contrasena) {
  try {
    const hash = await sc.encrypt(contrasena);
    return hash;
  } catch (error) {
    throw error;
  }
}

const secureMiddleware = {
  hashPassword: async (req, res, next) => {
    if (req.body.contrasena) {
      try {
        const hashedPassword = await generateHash(req.body.contrasena);
        req.body.contrasena = hashedPassword;
        next();
      } catch (error) {
        res.status(500).json({ error: 'Error al encriptar la contraseña' });
      }
    } else {
      next();
    }
  }
};

async function verificarContrasena(contrasenaIngresada, contrasenaAlmacenada) {
  try {
    const decript = await sc.decrypt(contrasenaAlmacenada);
    return decript === contrasenaIngresada ? true : false;
  } catch (error) {
    console.error("Error al verificar la contraseña:", error);
    return false;
  }
}

module.exports = {
  generateHash,
  secureMiddleware,
  verificarContrasena
};
