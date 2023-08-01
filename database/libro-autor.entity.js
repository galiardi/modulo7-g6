export default function (db, DataTypes) {
  const LibroAutor = db.define('LibroAutor', {
    /* 
    id innecesario en este caso.
    Se creara automaticamente un primary key compuesto por LibroId y AutorId.
    En este caso existe solo una combinacion LibroId-AutorId,
    por lo cual esta combinacion puede ser un primary key 
    */
    tipo_autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // LibroId, AutorId se crean con las asociaciones
  });
  return LibroAutor;
}
