const MONGOOSE = require('mongoose');
const tratarErrosEsperados = require('../functions/tratarErrosEsperados');

async function connectBD(req = null, res = null, next = null) {
  try {
    await MONGOOSE.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado ao BD!');
    try { next(); } catch { };
    return MONGOOSE
  } catch (error) {
    console.error(error);
    tratarErrosEsperados(res, 'Error: Erro ao conectar no BD!');
    return error;
  }
}

module.exports = connectBD;