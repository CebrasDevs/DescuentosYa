const { getAdminsByIdController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const admin = await getAdminsByIdController(req.params.id);
        return res.status(200).json(admin);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};