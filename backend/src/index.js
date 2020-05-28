const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors(/*{
  origin: 'http://minhaaplicação.com'
}*/));
app.use(express.json());
app.use(routes);

/*

Rota / Recurso

*/

/*

Metodos HTTP

GET: Buscar uma informação do back-end
POST: Criar uma Informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

*/ 

/* 
Tipos de Parametros 
Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
Route Params: Parametros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizados para criar ou alterar recursos
*/

/**
 * SQL: Mysql, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc. 
 * 
 */

 /**
  * Driver: SELECT * FROM users 
  * Query Builder: table('users').select('*').where()
  */

app.listen(3333);