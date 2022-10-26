/*
npm init -y
"start": "nodemon server.js"
npm install express mongoose cors
create folders

2nda terminal (instalación React):
npx create-react-app client
npm install axios react-router-dom@5.3.0

cd client <- si genera error 
npm start

1ra terminal:
npm start

Agregar link a bootstrap en index.html
Quitar <React.StrictMode> en index.js
*/

const express = require('express');
const cors = require('cors');
const app = express();

// Para poder usar Json & obtener datos de la URL
app.use( express.json(), express.urlencoded({extended : true}) );

// Permite accesar de un origen distinto
app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);

// inicializar DB
require('./server/config/mongoose.config')

// Importar las rutas
const misRutas = require('./server/routes/producto.routes');
misRutas(app);

app.listen(8000, ()=>console.log('Servidor corriendo!'));