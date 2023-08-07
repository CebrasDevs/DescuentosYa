const { updateVouchersController } = require("../../controllers");

module.exports = async (req, res) => {
    try {
        const voucher = await updateVouchersController(req.params.id, req.body);
        return res.status(200).json(voucher);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};