const { updateCategoryHelper } = require("../../helpers");

module.exports = async (id, data) => {
  const category = await updateCategoryHelper(id, data);
  return category;
};
