const MONGOOSE = require('mongoose');
const VALIDATOR = require('validator');


const esquema = new MONGOOSE.Schema(
  {
    nome: {
      type: String,
      required: 'é obrigatório!',
    },
    email: {
      type: String,
      unique: true,
      required: 'é obrigatório!',
      lowercase: true,
      index: true,
      validate: {
        validator: (valorDigitado) => { return VALIDATOR.isEmail(valorDigitado) },
        message: 'inválido!'
      }
    },
    senha: {
      type: String,
      required: 'é obrigatório!',
      select: false,
    },
  },
  {
    timestamps: true
  }
);

const EsquemaUsuario = MONGOOSE.models.Usuario || MONGOOSE.model('Usuario', esquema);
module.exports = EsquemaUsuario;