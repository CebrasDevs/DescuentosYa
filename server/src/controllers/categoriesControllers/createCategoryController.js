const { createCategoryHelper } = require("../../helpers");

module.exports = async (category) => {
  const category = await createCategoryHelper(category);
  return category;
};
