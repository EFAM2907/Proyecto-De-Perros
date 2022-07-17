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
    altura_max: {
      type: DataTypes.STRING,
      allowNull: false
    },
    altura_min :{
      type: DataTypes.STRING,
      allowNull: false
    },
    altura :{
      type: DataTypes.STRING,
      
    },
 
    peso: {
      type: DataTypes.DECIMAL,
     
    },
    peso_max :{
      type: DataTypes.STRING,
      allowNull: false
    },
    peso_min :{
      type: DataTypes.STRING,
      allowNull: false
    },
    años_vida:{
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    temper: {
      type: DataTypes.STRING,
    },
    
  });
};
