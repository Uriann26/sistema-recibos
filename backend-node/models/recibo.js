'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recibo extends Model {
    static associate(models) {
      // Recibo pertence a um Profissional
      Recibo.belongsTo(models.Profissional, {
        foreignKey: 'profissionalId'
      });

      // Recibo pertence a um Cliente
      Recibo.belongsTo(models.Cliente, {
        foreignKey: 'clienteId'
      });
    }
  }

  Recibo.init({
    profissionalId: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    data: DataTypes.DATE,
    descricao: DataTypes.STRING,
    extras: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Recibo',
  });

  return Recibo;
};
