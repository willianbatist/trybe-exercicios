const express = require('express');
const bodyParser = require('body-parser');
const Cep = require('./controllers/CepController');
const errorMiddleware = require('./middlewares/error.js');

const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => res.status(200).json({ message: 'funcionando'}) );

app.get('/ping', (_req, res) => res.status(200).json({ message: "pong!" }) );

app.get('/cep/:cep', Cep.findAddressByCep);

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
