export default function (db, DataTypes) {
  const Libro = db.define('Libro', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paginas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Libro;
}
