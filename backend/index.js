const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/obras', (req, res) => {
  res.json([
    { id: 1, titulo: 'Obra Uno', artista: 'Ana' },
    { id: 2, titulo: 'Obra Dos', artista: 'Pedro' },
  ]);
});

app.listen(4000, () => {
  console.log('Servidor backend en http://localhost:4000');
});
