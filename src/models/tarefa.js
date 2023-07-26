const MONGOOSE = require('mongoose');

const esquema = new MONGOOSE.Schema(
  {
    posicao: {
      type: Number,
      required: 'é obrigatório!',
    },
    titulo: {
      type: String,
      required: 'é obrigatório!',
    },
    descricao: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      required: 'é obrigatório!',
    },
    dataEntrega: {
      type: Date,
      default: null,
    },
    usuarioCriador: {
      type: MONGOOSE.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: 'é obrigatório!',
    },
  },
  {
    timestamps: true
  }
);

const EsquemaTarefa = MONGOOSE.models.Tarefa || MONGOOSE.model('Tarefa', esquema);
module.exports = EsquemaTarefa;