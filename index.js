const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar requisições JSON
app.use(express.json());

// Simulando um "banco de dados" em memória
let items = [];

// Rotas da API

// Listar todos os itens
app.get('/items', (req, res) => {
  res.json(items);
});

// Criar um novo item
app.post('/items', (req, res) => {
  const item = { id: items.length + 1, ...req.body };
  items.push(item);
  res.status(201).json(item);
});

// Obter um item específico por ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});

// Atualizar um item por ID
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    Object.assign(item, req.body);
    res.json(item);
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});

// Deletar um item por ID
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).send({ message: 'Item not found' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
