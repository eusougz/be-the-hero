const express = require('express');

const routes = express.Router();

/**
 * Métodos HTTP
 *      app.METODO_HTPP
 */

/**
 * Tipos de Parâmetros
 * 
 * Query Params: ?variavel=value    (são nomeados pela rota)
 * Route Params: rota/:variavel
 * Request Body: corpo da request
 */

 /**
  * Query Builder: faz comandos SQL em JS (ex: table('users').select('*').where()...)
  * Utilizado no projeto: Knex
  */

 routes.get('/users', (request, response) => {

    return response.json({
        event: '2 anos',
        dinner: 'Vinho'
    });
});

module.exports = routes;    // Forma do node de exportar uma variavel
