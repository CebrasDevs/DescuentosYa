// Recibe la solicitud del cliente (front) 



const  getShoppingHandler  = require('./shoppingHandlers/getShoppingHandler');
const  createShoppingHandler  = require('./shoppingHandlers/createShoppingHandler');
const  updateShoppingHandler  = require('./shoppingHandlers/updateShoppingHandler');

const  getItemsHandler  = require('./itemsHandlers/getItemsHandler');
const  createItemsHandler  = require('./itemsHandlers/createItemsHandler');
const  updateItemsHandler  = require('./itemsHandlers/updateItemsHandler');



module.exports = {

    getShoppingHandler,
    createShoppingHandler,
    updateShoppingHandler,
    
    getItemsHandler,
    createItemsHandler,
    updateItemsHandler

}
