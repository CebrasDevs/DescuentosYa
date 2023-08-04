const getShoppingHandler = require('./shoppingHandlers/getShoppingHandler');
const createShoppingHandler = require('./shoppingHandlers/createShoppingHandler');
const updateShoppingHandler = require('./shoppingHandlers/updateShoppingHandler');

const getItemsHandler = require('./itemsHandlers/getItemsHandler');
const createItemsHandler = require('./itemsHandlers/createItemsHandler');
const updateItemsHandler = require('./itemsHandlers/updateItemsHandler');

const createUsersHandler = require("./usersHandlers/createUsersHandler");
const updateUsersHandler = require("./usersHandlers/updateUsersHandler");
const getUsersHandler = require("./usersHandlers/getUsersHandler");

const createAdminsHandler = require("./usersHandlers/createAdminsHandler");
const updateAdminsHandler = require("./usersHandlers/updateAdminsHandler");
const getAdminsHandler = require("./usersHandlers/getAdminsHandler");
const getAdminsByIdHandler = require("./usersHandlers/getAdminsByIdHandler");

const createCompaniesHandler = require("./usersHandlers/createCompaniesHandler");
const updateCompaniesHandler = require("./usersHandlers/updateCompaniesHandler");
const getCompaniesHandler = require("./usersHandlers/getCompaniesHandler");

const createMembersHandler = require("./usersHandlers/createMembersHandler");
const updateMembersHandler = require("./usersHandlers/updateMembersHandler");
const getMembersHandler = require("./usersHandlers/getMembersHandler");

const createVouchersHandler = require("./vouchersHandlers/createVouchersHandler");
const updateVouchersHandler = require("./vouchersHandlers/updateVouchersHandler");
const getVouchersHandler = require("./vouchersHandlers/getVouchersHandler");

module.exports = {
    getShoppingHandler,
    createShoppingHandler,
    updateShoppingHandler,

    getItemsHandler,
    createItemsHandler,
    updateItemsHandler,

    createUsersHandler,
    updateUsersHandler,
    getUsersHandler,

    createAdminsHandler,
    updateAdminsHandler,
    getAdminsHandler,
    getAdminsByIdHandler,

    createCompaniesHandler,
    getCompaniesHandler,
    updateCompaniesHandler,

    createMembersHandler,
    updateMembersHandler,
    getMembersHandler,

    createVouchersHandler,
    getVouchersHandler,
    updateVouchersHandler,
};
