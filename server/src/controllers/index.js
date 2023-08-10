// ADMINS CONTROLLERS
const createAdminsController = require("./adminsControllers/createAdminsController");
const updateAdminsController = require("./adminsControllers/updateAdminsController");

// USERS CONTROLLERS
const createUsersController = require("./usersControllers/createUsersController");
const updateUsersController = require("./usersControllers/updateUsersController");
const getUsersController = require("./usersControllers/getUsersController");
const getProfileController = require("./usersControllers/getProfileController");

// COMPANIES CONTROLLERS
const createCompaniesController = require("./companiesControllers/createCompaniesController");
const updateCompaniesController = require("./companiesControllers/updateCompaniesController");
const getCompaniesController = require("./companiesControllers/getCompaniesController");
const getCompaniesByIdController = require("./companiesControllers/getCompaniesByIdController");

// MEMBERS CONTROLLERS
const createMembersController = require("./membersControllers/createMembersController");
const updateMembersController = require("./membersControllers/updateMembersController");

// VOUCHERS CONTROLLERS
const createVouchersController = require("./vouchersControllers/createVouchersController");
const updateVouchersController = require("./vouchersControllers/updateVouchersController");
const getVouchersController = require("./vouchersControllers/getVouchersController");

// SHOPPING CONTROLLERS
const getShoppingController = require("./shoppingControllers/getShoppingController");
const createShoppingController = require("./shoppingControllers/createShoppingController");
const updateShoppingController = require("./shoppingControllers/updateShoppingController");

// ITEMS CONTROLLERS
const getItemsController = require("./itemsControllers/getItemsController");
const createItemsController = require("./itemsControllers/createItemsController");
const updateItemsController = require("./itemsControllers/updateItemsController");
const getItemsByIdController = require("./itemsControllers/getItemsByIdController");

// CATEGORIES CONTROLLERS
const createCategoryController = require("./categoriesControllers/createCategoryController");
const deleteCategoryController = require("./categoriesControllers/deleteCategoryController");
const getCategoriesController = require("./categoriesControllers/getCategoriesController");
const getCategoriesEnabledController = require("./categoriesControllers/getCategoriesEnabledController");
const getCategoriesDisabledController = require("./categoriesControllers/getCategoriesDisabledController");
const updateCategoryController = require("./categoriesControllers/updateCategoryController");

module.exports = {
  //USERS CONTROLLER
  createUsersController,
  updateUsersController,
  getUsersController,
  getProfileController,

  //ADMINS CONTROLLERS
  createAdminsController,
  updateAdminsController,

  //COMPANIES CONTROLLERS
  createCompaniesController,
  updateCompaniesController,
  getCompaniesController,
  getCompaniesByIdController,

  //MEMBERS CONTROLLERS
  createMembersController,
  updateMembersController,

  //VOUCHERS CONTROLLERS
  createVouchersController,
  updateVouchersController,
  getVouchersController,

  //SHOPPING CONTROLLERS
  getShoppingController,
  createShoppingController,
  updateShoppingController,

  //ITEMS CONTROLLERS
  getItemsController,
  createItemsController,
  updateItemsController,
  getItemsByIdController,

  //CATEGORIES CONTROLLERS
  createCategoryController,
  deleteCategoryController,
  getCategoriesController,
  getCategoriesDisabledController,
  getCategoriesEnabledController,
  updateCategoryController,
};
