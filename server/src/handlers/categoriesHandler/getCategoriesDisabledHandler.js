const { getCategoriesDisabledController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    const categories = await getCategoriesDisabledController();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
