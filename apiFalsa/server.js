const express = require('express');
const { faker } = require("@faker-js/faker");

const app = express();
const port = 8080;

class Usuario {
    constructor() {
      this._idUser = faker.string.uuid();
      this.name = faker.person.firstName();
      this.lastName = faker.person.lastName();
      this.tel = faker.phone.number();
      this.email = faker.internet.email();
      this.password = faker.internet.password();
    }
  }
  
  class Empresa {
    constructor() {
      this._idEmpresa = faker.string.uuid();
      this.name = faker.company.name();
      this.direccion = {
        calle: faker.location.direction(),
        ciudad: faker.location.city(),
        codigoPostal: faker.location.zipCode(),
        pais: faker.location.country(),
      };
    }
  }

// Ruta para nuevo usuario
app.get('/api/users/new', (req, res) => {
  const nuevoUsuario = new Usuario();
  res.json(nuevoUsuario);
});

// Ruta para nueva empresa
app.get('/api/companies/new', (req, res) => {
  const nuevaEmpresa = new Empresa();
  res.json(nuevaEmpresa);
});

// Ruta para un nuevo usuario y empresa
app.get('/api/user/company', (req, res) => {
  const nuevoUsuario = new Usuario();
  const nuevaEmpresa = new Empresa();
  res.json({ usuario: nuevoUsuario, empresa: nuevaEmpresa });
});

// servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
