import { Sequelize, DataTypes } from 'sequelize';
import definirAutor from './autor.entity.js';
import definirLibroAutor from './libro-autor.entity.js';
import definirLibro from './libro.entity.js';
import definirPrestamo from './prestamo.entity.js';
import definirSocio from './socio.entity.js';

const db = new Sequelize({
  username: 'root',
  password: 'secret',
  host: 'localhost',
  database: 'grupal6',
  dialect: 'mysql',
});

db.Autor = definirAutor(db, DataTypes);
db.LibroAutor = definirLibroAutor(db, DataTypes);
db.Libro = definirLibro(db, DataTypes);
db.Prestamo = definirPrestamo(db, DataTypes);
db.Socio = definirSocio(db, DataTypes);

// One to many (Libro LibroAutor)
db.Libro.hasMany(db.LibroAutor);
db.LibroAutor.belongsTo(db.Libro);

// One to many (Autor LibroAutor)
db.Autor.hasMany(db.LibroAutor);
db.LibroAutor.belongsTo(db.Autor);

// One to many (Libro Prestamo)
db.Libro.hasMany(db.Prestamo);
db.Prestamo.belongsTo(db.Libro);

// One to many (Socio Prestamo)
db.Socio.hasMany(db.Prestamo);
db.Prestamo.belongsTo(db.Socio);

export default db;
