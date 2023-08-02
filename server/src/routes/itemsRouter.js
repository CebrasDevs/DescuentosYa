const { Router } = require('express')
const { getItemsHandler, createItemsHandler, updateItemsHandler }  = require('../handlers')

const itemsRouter = Router();

itemsRouter.get('/', getItemsHandler)

itemsRouter.post('/', createItemsHandler)

itemsRouter.patch('/:id', updateItemsHandler)

module.exports = itemsRouter;
