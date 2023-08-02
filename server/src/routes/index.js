const { Router } = require('express');
const itemsRouter = require('./itemsRouter');

const mainRouter = Router();

mainRouter.use('/items', itemsRouter); //quitar antes de pushear


module.exports = mainRouter;