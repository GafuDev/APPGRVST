const db = require('../../db');

class Usuario {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM usuario', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  static create(newUser) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO usuario SET ?', newUser, (error, result) => {
        //console.log(newUser);
        if (error) {
          reject(error);
        } else {
          resolve(result.insertId);
        }
      });
    });
  }

  static update(id, updatedUser) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE usuario SET ? WHERE id = ?', [updatedUser, id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve('Usuario actualizado');
        }
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM usuario WHERE id = ?', id, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve('Usuario eliminado');
        }
      });
    });
  }
}

module.exports = Usuario;