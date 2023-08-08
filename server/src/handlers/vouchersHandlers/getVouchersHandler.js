const { getVouchersController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const vouchers = await getVouchersController(id);
    return res.status(200).json(vouchers);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};