const getShoppingHandler = require("./shoppingHandlers/getShoppingHandler");
const createShoppingHandler = require("./shoppingHandlers/createShoppingHandler");
const updateShoppingHandler = require("./shoppingHandlers/updateShoppingHandler");

const getItemsHandler = require("./itemsHandlers/getItemsHandler");
const createItemsHandler = require("./itemsHandlers/createItemsHandler");
const updateItemsHandler = require("./itemsHandlers/updateItemsHandler");

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
const getCompaniesByIdHandler = require("./usersHandlers/getCompaniesByIdHandler");

const createMembersHandler = require("./usersHandlers/createMembersHandler");
const updateMembersHandler = require("./usersHandlers/updateMembersHandler");
const getMembersHandler = require("./usersHandlers/getMembersHandler");
const getMembersByIdHandler = require("./usersHandlers/getMembersByIdHandler");

const createVouchersHandler = require("./vouchersHandlers/createVouchersHandler");
const updateVouchersHandler = require("./vouchersHandlers/updateVouchersHandler");
const getVouchersHandler = require("./vouchersHandlers/getVouchersHandler");

const createCategoryHandler = require("./categoriesHandler/createCategoryHandler");
const deleteCategoryHandler = require("./categoriesHandler/deleteCategoryHandler");
const getCategoriesHandler = require("./categoriesHandler/getCategoriesHandler");
const updateCategoryHandler = require("./categoriesHandler/updateCategoryHandler");

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
  getCompaniesByIdHandler,

  createMembersHandler,
  updateMembersHandler,
  getMembersHandler,
  getMembersByIdHandler,

  createVouchersHandler,
  getVouchersHandler,
  updateVouchersHandler,

  createCategoryHandler,
  deleteCategoryHandler,
  getCategoriesHandler,
  updateCategoryHandler,
};
