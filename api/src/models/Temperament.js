const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Temperament', {
      nombre: {
        type: DataTypes.STRING,
      },
    })};