'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PerfilProfissional extends Model {
    static associate(models) {
      // PerfilProfissional tem muitos Profissionais (via campo tipo)
      PerfilProfissional.hasMany(models.Profissional, {
        foreignKey: 'tipo',
        sourceKey: 'tipo'
      });
    }
  }

  PerfilProfissional.init({
    tipo: DataTypes.STRING,
    campos_extras: DataTypes.JSON,
    template: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PerfilProfissional',
  });

  return PerfilProfissional;
};
