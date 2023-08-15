// SHOPPPING HELPERS
const getShoppingHandler = require("./shoppingHandlers/getShoppingHandler");
const createShoppingHandler = require("./shoppingHandlers/createShoppingHandler");
const updateShoppingHandler = require("./shoppingHandlers/updateShoppingHandler");

// ITEMS HELPERS
const getItemsHandler = require("./itemsHandlers/getItemsHandler");
const createItemsHandler = require("./itemsHandlers/createItemsHandler");
const updateItemsHandler = require("./itemsHandlers/updateItemsHandler");
const getItemsByIdHandler = require("./itemsHandlers/getItemsByIdHandler")

// USERS HELPERS
const createUsersHandler = require("./usersHandlers/createUsersHandler");
const updateUsersHandler = require("./usersHandlers/updateUsersHandler");
const getUsersHandler = require("./usersHandlers/getUsersHandler");
const getProfileHandler = require("./usersHandlers/getProfileHandler");

// ADMINS HELPERS
const createAdminsHandler = require("./adminsHandlers/createAdminsHandler");
const updateAdminsHandler = require("./adminsHandlers/updateAdminsHandler");

// COMPANIES HELPERS
const createCompaniesHandler = require("./companiesHanlders/createCompaniesHandler");
const updateCompaniesHandler = require("./companiesHanlders/updateCompaniesHandler");
const getCompaniesHandler = require("./companiesHanlders/getCompaniesHandler");
const getCompaniesByIdHandler = require("./companiesHanlders/getCompaniesByIdHandler");

// MEMBERS HELPERS
const createMembersHandler = require("./membersHandlers/createMembersHandler");
const updateMembersHandler = require("./membersHandlers/updateMembersHandler");

// VOUCHERS HELPERS
const createVouchersHandler = require("./vouchersHandlers/createVouchersHandler");
const disableVouchersHandler = require("./vouchersHandlers/disableVouchersHandler");
const getVouchersHandler = require("./vouchersHandlers/getVouchersHandler");

// CATEGORIES HELPERS
const createCategoryHandler = require("./categoriesHandler/createCategoryHandler");
const deleteCategoryHandler = require("./categoriesHandler/deleteCategoryHandler");
const getCategoriesHandler = require("./categoriesHandler/getCategoriesHandler");
const updateCategoryHandler = require("./categoriesHandler/updateCategoryHandler");

// REVIEW HANDLERS
const postReviewHandler = require("./reviewHandlers/postReviewHandler");

module.exports = {
  getShoppingHandler,
  createShoppingHandler,
  updateShoppingHandler,

  getItemsHandler,
  createItemsHandler,
  updateItemsHandler,
  getItemsByIdHandler,

  createUsersHandler,
  updateUsersHandler,
  getUsersHandler,
  getProfileHandler,

  createAdminsHandler,
  updateAdminsHandler,

  createCompaniesHandler,
  getCompaniesHandler,
  updateCompaniesHandler,
  getCompaniesByIdHandler,

  createMembersHandler,
  updateMembersHandler,

  createVouchersHandler,
  getVouchersHandler,
  disableVouchersHandler,

  createCategoryHandler,
  deleteCategoryHandler,
  getCategoriesHandler,
  updateCategoryHandler,

  postReviewHandler,
};
