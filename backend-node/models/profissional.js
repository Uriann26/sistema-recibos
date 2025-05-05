'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Profissional extends Model {
    static associate(models) {
      // Profissional tem muitos Recibos
      Profissional.hasMany(models.Recibo, {
        foreignKey: 'profissionalId'
      });

      // Profissional pertence a um PerfilProfissional
      Profissional.belongsTo(models.PerfilProfissional, {
        foreignKey: 'tipo',
        targetKey: 'tipo'
      });
    }
  }

  Profissional.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf_cnpj: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profissional',
  });

  return Profissional;
};
