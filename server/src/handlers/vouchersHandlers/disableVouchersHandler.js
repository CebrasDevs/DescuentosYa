const { disableVouchersController } = require("../../controllers");

module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        
        const voucher = await disableVouchersController(id);
        return res.status(200).json(voucher);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};