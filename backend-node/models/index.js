'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// RELACIONAMENTOS

// Profissional tem muitos Recibos
db.Profissional.hasMany(db.Recibo, {
  foreignKey: 'profissionalId'
});
db.Recibo.belongsTo(db.Profissional, {
  foreignKey: 'profissionalId'
});

// Cliente tem muitos Recibos
db.Cliente.hasMany(db.Recibo, {
  foreignKey: 'clienteId'
});
db.Recibo.belongsTo(db.Cliente, {
  foreignKey: 'clienteId'
});

// Profissional pertence a um PerfilProfissional
db.PerfilProfissional.hasMany(db.Profissional, {
  foreignKey: 'tipo',
  sourceKey: 'tipo'
});
db.Profissional.belongsTo(db.PerfilProfissional, {
  foreignKey: 'tipo',
  targetKey: 'tipo'
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
