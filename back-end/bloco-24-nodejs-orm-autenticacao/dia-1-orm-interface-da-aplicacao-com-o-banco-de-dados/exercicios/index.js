const express = require('express');
const { books } = require('./models');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', async (_req, res) => {
    try {
      const booksFind = await books.findAll();
      console.log(booksFind);
      return res.status(200).json(booksFind)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
})

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));