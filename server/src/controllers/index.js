const createAdminsController = require("./usersControllers/createAdminsController");
const updateAdminsController = require("./usersControllers/updateAdminsController");
const getAdminsController = require("./usersControllers/getAdminsController");
const getAdminsByIdController = require("./usersControllers/getAdminsByIdController");

const createUsersController = require("./usersControllers/createUsersController");
const updateUsersController = require("./usersControllers/updateUsersController");
const getUsersController = require("./usersControllers/getUsersController");

const createCompaniesController = require("./usersControllers/createCompaniesController");
const updateCompaniesController = require("./usersControllers/updateCompaniesController");
const getCompaniesController = require("./usersControllers/getCompaniesController");

const createMembersController = require("./usersControllers/createMembersController");
const updateMembersController = require("./usersControllers/updateMembersController");
const getMembersController = require("./usersControllers/getMembersController");

const createVouchersController = require("./vouchersControllers/createVouchersController");
const updateVouchersController = require("./vouchersControllers/updateVouchersController");
const getVouchersController = require("./vouchersControllers/getVouchersController");

const  getShoppingController  = require('./shoppingControllers/getShoppingController');
const  createShoppingController   = require('./shoppingControllers/createShoppingController');
const  updateShoppingController   = require('./shoppingControllers/updateShoppingController');

const  getItemsController  = require('./itemsControllers/getItemsController');
const  createItemsController   = require('./itemsControllers/createItemsController');
const  updateItemsController   = require('./itemsControllers/updateItemsController');

module.exports = {
    createUsersController,
    updateUsersController,
    getUsersController,

    createAdminsController,
    updateAdminsController,
    getAdminsController,
    getAdminsByIdController,

    createCompaniesController,
    updateCompaniesController,
    getCompaniesController,

    createMembersController,
    updateMembersController,
    getMembersController,

    createVouchersController,
    updateVouchersController,
    getVouchersController,

    getShoppingController,
    createShoppingController,
    updateShoppingController,
    
    getItemsController,
    createItemsController,
    updateItemsController
};