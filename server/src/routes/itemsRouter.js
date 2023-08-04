const { 
    
    getItemsHandler, 
    createItemsHandler, 
    updateItemsHandler,
    getItemsByIdHandler 
    
}  = require('../handlers')

const { Router } = require('express')
const itemsRouter = Router();

itemsRouter.get('/', getItemsHandler)
itemsRouter.get('/:id', getItemsByIdHandler)
itemsRouter.post('/', createItemsHandler)
itemsRouter.patch('/:id', updateItemsHandler)

module.exports = itemsRouter;
