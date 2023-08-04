const { getAdminsController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const admins = await getAdminsController();
        return res.status(200).json(admins);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};