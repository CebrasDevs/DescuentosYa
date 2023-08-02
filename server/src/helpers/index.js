
// este componente se comunica con la base de datos

const getItemsHelper = require('../helpers/itemsHelpers/getItemsHelper');
const createItemsHelper = require('./itemsHelpers/createItemsHelper')
const updateItemsHelper = require('../helpers/itemsHelpers/updateItemsHelper')

module.exports = {
    getItemsHelper,
    createItemsHelper,
    updateItemsHelper
}