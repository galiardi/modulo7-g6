export default function (db, DataTypes) {
  const Socio = db.define('Socio', {
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING, // string: puede incluir simbolo +
      allowNull: false,
    },
  });
  return Socio;
}
