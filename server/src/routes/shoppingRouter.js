
const { 
    
    getShoppingHandler,
    createShoppingHandler, 
    updateShoppingHandler
    
} = require('../handlers')

const { Router } = require('express');
const shoppingRouter = Router();
const {verifyToken} = require("../utils/authMiddleware");

shoppingRouter.get('/', getShoppingHandler)
shoppingRouter.post('/', createShoppingHandler)
shoppingRouter.patch('/:id', updateShoppingHandler)

module.exports = shoppingRouter;