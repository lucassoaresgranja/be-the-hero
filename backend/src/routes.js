const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController .create);

//listagem de ongs
routes.get('/ongs', OngController.index);

//criação de ongs
 routes.post('/ongs', OngController.create);

 //
 routes.get('/profile', ProfileController.index);
 
 //listagem de incidents
 routes.get('/incidents', IncidentController.index);

 //criação de incidents
 routes.post('/incidents', IncidentController.create);

 //deletar incidents
 routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; 