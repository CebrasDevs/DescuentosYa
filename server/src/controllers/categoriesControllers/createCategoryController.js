const { createCategoryHelper } = require("../../helpers");

module.exports = async (body) => {
  const category = await createCategoryHelper(body);
  return category;
};
