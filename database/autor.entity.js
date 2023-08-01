export default function (db, DataTypes) {
  const Autor = db.define('Autor', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    muerte: {
      type: DataTypes.DATEONLY,
    },
  });
  return Autor;
}
