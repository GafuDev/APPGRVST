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

  editarUsuario: async (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    try {
      await Usuario.update(id, updatedUser);
      res.json({ message: 'Usuario actualizado' });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Error al actualizar usuario' });
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

