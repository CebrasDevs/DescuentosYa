const {
  getCategoriesController,
  getCategoriesEnabledController,
  getCategoriesDisabledController,
} = require("../../controllers");

module.exports = async (req, res) => {
  try {
    const enabled = req.query.enabled;
    let categories;
    if (enabled) {
      if (enabled === "true") {
        categories = await getCategoriesEnabledController();
      } else {
        categories = await getCategoriesDisabledController();
      }
    } else {
      categories = await getCategoriesController();
    }
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
