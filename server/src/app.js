//instanciamos el framework express
const express = require('express');

//mousqueherramienta que vamos a utilizar despues son jwt
const cookieParser = require('cookie-parser');

// nos ayuda a la interpretacion de los datos que llegan por POST, PUT y PATCH
const bodyParser = require('body-parser');

// nos ayuda a resolver las metricas con la informacion que nos ofrece, nos sirve para dev y en produccion hay que tener cuidado con los datos sensibles
const morgan = require('morgan');

//intanciamos las rutas
const routes = require('./routes/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});

app.use('/', routes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
