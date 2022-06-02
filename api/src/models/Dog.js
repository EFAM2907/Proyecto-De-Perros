const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    // altura: {
    //   type: DataTypes.DECIMAL,
    //   allowNull: false
    // },
    altura :{
      type: DataTypes.STRING,
      allowNull: false
    },
 
    peso: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    // peso_max_min :{
    //   type: DataTypes.STRING,
    // },
    
    años_vida:{
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    // temperamentos: {
    //   type: DataTypes.STRING,
    // },
    
  });
};
