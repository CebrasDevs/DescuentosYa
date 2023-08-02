// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const { getVouchersController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const vouchers = await getVouchersController();
        return res.status(200).json(vouchers);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};