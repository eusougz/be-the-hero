const express = require('express'); //import
const routes = require('./routes');

const app = express();

/** 
 * Configura o express para entender que as requests
 * estarão no formato JSON
*/

app.use(express.json()); 
app.use(routes);

app.listen(3333);


