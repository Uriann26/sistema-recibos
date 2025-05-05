// backend-node/app.js
require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

// Rotas
const profissionalRoutes = require('./routes/profissionalRoutes');
app.use('/api/profissionais', profissionalRoutes);

const clienteRoutes = require('./routes/clienteRoutes');
app.use('/api/clientes', clienteRoutes);

const reciboRoutes = require('./routes/reciboRoutes');
app.use('/api/recibos', reciboRoutes);


// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Recibos Profissionais');
});

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
