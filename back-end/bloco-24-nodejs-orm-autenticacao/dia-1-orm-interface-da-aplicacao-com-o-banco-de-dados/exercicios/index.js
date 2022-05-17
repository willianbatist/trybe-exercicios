const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', (_req, res) => res.status(200).json({ name: "Willian" }))

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));