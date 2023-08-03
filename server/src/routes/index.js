const  shoppingRouter   = require('./shoppingRouter')
const itemsRouter = require('./itemsRouter')

const { Router } = require('express');
const mainRouter = Router();

mainRouter.use('/shopping', shoppingRouter);
mainRouter.use('/items', itemsRouter);

module.exports = mainRouter;