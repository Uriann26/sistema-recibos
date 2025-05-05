const { Profissional, PerfilProfissional } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const profissionais = await Profissional.findAll({ include: PerfilProfissional });
      res.json(profissionais);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao listar profissionais', detalhes: error.message });
    }
  },

  async cadastrar(req, res) {
    try {
      const novo = await Profissional.create(req.body);
      res.status(201).json(novo);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao cadastrar profissional', detalhes: error.message });
    }
  }
};
