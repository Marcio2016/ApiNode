const express = require('express');

const server = express();

//Habilitando express para leitura de JSON do corpo da requisição.
server.use(express.json());

const users = ['Goku', 'Vegeta', 'Trunks'];

//Middleware Global
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url};`);
   
  next();

  console.timeEnd('Request'); 
});

//Middleware Local
function checkUserExists(req,res,next){
  if(!req.body.name) {
    return res.status(400).json({error: 'Usuário é requerido!'});
  }

  return next();
}

//Middleware Local
function checkUserInArray(req,res,next){
  if(!users[req.params.index]) {
    return res.status(400).json({error: 'Usuário não encontrado!'});
  }

  return next();
}

//Busca todos
server.get('/users',(req, res) => {
  return res.json(users);
});

//Busca por index
server.get('/users/:index', checkUserInArray, (req, res) =>{
  const { index }= req.params;
  
  return res.json(users[index]);
});

//Adiciona users
server.post('/users',checkUserExists, (req,res) => {
  const { nome } = req.body;

  users.push(nome);

  return res.json(users);
});

//Alterar users
server.put('/users/:index',checkUserExists,checkUserInArray, (req,res) => {
  const { index } = req.params;
  const { nome } = req.body;

  users[index] = nome;

  return res.json(users);
});

//Deletando users
server.delete('/users/:index',checkUserInArray, (req,res) => {
  const { index } = req.params;
  
  users.splice(index,1);

  return res.send();
});

server.listen(3000);