const express = require('express');

const server = express();

//Habilitando express para leitura de JSON do corpo da requisição.
server.use(express.json());

const users = ['Goku', 'Vegeta', 'Trunks'];

//Busca todos
server.get('/users',(req, res) => {
  return res.json(users);
});

//Busca por index
server.get('/users/:index', (req, res) =>{
  const { index }= req.params;
  
  return res.json(users[index]);
});

//Adiciona users
server.post('/users', (req,res) => {
  const { nome } = req.body;

  users.push(nome);

  return res.json(users);
});

//Alterar users
server.put('/users/:index', (req,res) => {
  const { index } = req.params;
  const { nome } = req.body;

  users[index] = nome;

  return res.json(users);
});

//Deletando users
server.delete('/users/:index', (req,res) => {
  const { index } = req.params;
  
  users.splice(index,1);

  return res.send();
});

server.listen(3000);