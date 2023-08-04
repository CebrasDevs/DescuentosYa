const { deleteCategoryController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    const result = await deleteCategoryController(req.params.id);
    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
