const { createCategoryController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    const category = await createCategoryController(req.body);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
