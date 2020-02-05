const express = require('express');

const server = express();

//Query params = ?teste=1  exemplo: http://localhost:3000/teste?nome=marcio
//Route params = /users/1  exemplo: http://localhost:3000/users/2
//Request body = { "name": "email", "email": "email@email.com.br" }

/*Query params
server.get('/users', (req, res) =>{
  const nome = req.query.nome;
  
  return res.json({message:`Hello ${nome}`});
})*/

/*Route params
server.get('/users/:id', (req, res) =>{
  const { id }= req.params;
  
  return res.json({message:`Buscando o usuário ${id}`});
})*/

server.listen(3000);

