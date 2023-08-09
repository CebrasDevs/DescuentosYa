const { createVouchersController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        let { itemId, userId } = req.body;
        const newVoucher = { itemId, userId }
        const voucher = await createVouchersController(newVoucher);
        return res.status(200).json(voucher);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};