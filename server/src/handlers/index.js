// Recibe la solicitud del cliente (front) 

const getItemsHandler = require('./itemsHandlers/getItemsHandler')
const createItemsHandler = require('./itemsHandlers/createItemsHandler')
const updateItemsHandler = require('./itemsHandlers/updateItemsHandler')


module.exports = {
    getItemsHandler,
    createItemsHandler,
    updateItemsHandler
}
