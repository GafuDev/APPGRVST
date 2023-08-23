const Usuario = require('../models/usuariomodel');

const usuarioController = {
  listarUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  },

  agregarUsuario: async (req, res) => {
    const newUser = req.body;
    try {
      const insertedId = await Usuario.create(newUser);
      res.json({ message: 'Usuario agregado', id: insertedId });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Error al agregar usuario' });
    }
  },

  obtenerPorID: async (req, res) => {
    const id = req.params.id;

    try {
      const usuario = await Usuario.getById(id);

      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener usuario por ID' });
    }
  },

  editarUsuario: async (req, res) => {
    const idUsuario = req.params.idUsuario; 
    const userData = req.body;

    try {
      const result = await Usuario.update(idUsuario, userData);
      res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
  },
  
  eliminarUsuario: async (req, res) => {
    const id = req.params.id;
    try {
      await Usuario.delete(id);
      res.json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  },
};

module.exports = usuarioController;

