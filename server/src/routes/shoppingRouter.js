
const { 
    
    getShoppingHandler,
    createShoppingHandler, 
    updateShoppingHandler
    
} = require('../handlers')

const { Router } = require('express');
const shoppingRouter = Router();

shoppingRouter.get('/', getShoppingHandler)
shoppingRouter.post('/', createShoppingHandler)
shoppingRouter.patch('/:id', updateShoppingHandler)

module.exports = shoppingRouter;