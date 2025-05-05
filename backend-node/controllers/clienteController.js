const { Cliente } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: error.message });
    }
  },

  async cadastrar(req, res) {
    try {
      const novo = await Cliente.create(req.body);
      res.status(201).json(novo);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao cadastrar cliente', detalhes: error.message });
    }
  }
};
