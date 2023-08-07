const { deleteCategoryHelper } = require("../../helpers");

module.exports = async (id) => {
  const response = await deleteCategoryHelper(id);
  return response;
};
