// validamos todos los datos correspondientes de entrada y salida


const getItemsController = require('./itemsControllers/getItemsController')

const createItemsController = require('./itemsControllers/createItemsController')

const updateItemsController = require('./itemsControllers/updateItemsController')

module.exports = {
    getItemsController,
    createItemsController,
    updateItemsController
}