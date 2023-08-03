// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const { updateVoucherController } = require("../../controllers");

module.exports = async (req, res) => {
    try {
        const voucher = await updateVoucherController(req.params.id, req.body);
        return res.status(200).json(voucher);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};