    // index.js

    const express = require('express');
    const Author = require('./models/Author')
    const app = express();

    app.get('/authors', async (_req, res) => {
        const authors = await Author.getAll();

        res.status(200).json(authors);
    });

    app.get('/authors/:id', async (req, res) => {
        const { id } = req.params;

        const author = await Author.findById(id);

        if (!author) return res.status(404).json({ message: 'Not found' });

        res.status(200).json(author);
    });

    const PORT = process.env.PORT || 3002;

    app.listen(PORT, () => {
        console.log(`Ouvindo a porta ${PORT}`);
    });