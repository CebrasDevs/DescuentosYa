
const { 
    
    getShoppingHandler,
    createShoppingHandler, 
    updateShoppingHandler
    
} = require('../handlers')

const { Router } = require('express');
const shoppingRouter = Router();
const {verifyToken} = require("../utils/authMiddleware");

shoppingRouter.get('/', verifyToken, getShoppingHandler)
shoppingRouter.post('/', verifyToken, createShoppingHandler)
shoppingRouter.patch('/:id', verifyToken, updateShoppingHandler)

module.exports = shoppingRouter;