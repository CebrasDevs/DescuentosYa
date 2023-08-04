const { updateCategoryController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    const category = await updateCategoryController(req.params.id, req.body);
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
