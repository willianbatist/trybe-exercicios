const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => res.status(200).json({ message: 'funcionando'}) );

app.get('/ping', (_req, res) => res.status(200).json({ message: "pong!" }) );

app.get('/cep/:cep', (req, res) => {
  
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
