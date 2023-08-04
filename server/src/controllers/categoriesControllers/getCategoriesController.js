const { getCategoriesHelper } = require("../../helpers");

module.exports = async () => {
  const categories = await getCategoriesHelper();
  return categories;
};
