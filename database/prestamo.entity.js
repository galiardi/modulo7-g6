export default function (db, DataTypes) {
  const Prestamo = db.define('Prestamo', {
    inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    devolucion_esperada: {
      type: DataTypes.DATE,
    },
    devolucion_real: {
      type: DataTypes.DATE,
    },
    // LibroId, SocioId se crean con las asociaciones
  });

  return Prestamo;
}
