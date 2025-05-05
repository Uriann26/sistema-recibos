'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // Cliente tem muitos Recibos
      Cliente.hasMany(models.Recibo, {
        foreignKey: 'clienteId'
      });
    }
  }

  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });

  return Cliente;
};
