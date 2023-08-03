// validamos todos los datos correspondientes de entrada y salida


const  getShoppingController  = require('./shoppingControllers/getShoppingController');
const  createShoppingController   = require('./shoppingControllers/createShoppingController');
const  updateShoppingController   = require('./shoppingControllers/updateShoppingController');

const  getItemsController  = require('./itemsControllers/getItemsController');
const  createItemsController   = require('./itemsControllers/createItemsController');
const  updateItemsController   = require('./itemsControllers/updateItemsController');


module.exports = {

    getShoppingController,
    createShoppingController,
    updateShoppingController,
    
    getItemsController,
    createItemsController,
    updateItemsController

}