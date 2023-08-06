const { getCategoriesHelper } = require("../../helpers");

module.exports = async () => {
  const categories = await getCategoriesHelper();
  const categoryNames = categories.map((category) => category.name);
  return categoryNames;
};
