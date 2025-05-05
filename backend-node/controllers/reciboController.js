const axios = require('axios');
const { Recibo, Cliente, Profissional, PerfilProfissional } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const recibos = await Recibo.findAll({
        include: [Profissional, Cliente]
      });
      res.json(recibos);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao listar recibos', detalhes: error.message });
    }
  },

  async cadastrar(req, res) {
    try {
      const novo = await Recibo.create(req.body);
      res.status(201).json(novo);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao cadastrar recibo', detalhes: error.message });
    }
  },

  async gerarPdf(req, res) {
    try {
      const recibo = await Recibo.findByPk(req.params.id, {
        include: [Profissional, Cliente]
      });

      if (!recibo) {
        return res.status(404).json({ erro: 'Recibo não encontrado' });
      }

      // Enviar dados para o Flask
      const resposta = await axios.post('http://localhost:5000/gerar-pdf', recibo, {
        responseType: 'arraybuffer' // receber como arquivo
      });

      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename=recibo.pdf'
      });

      res.send(resposta.data);

    } catch (error) {
      res.status(500).json({ erro: 'Erro ao gerar PDF', detalhes: error.message });
    }
  }
};
