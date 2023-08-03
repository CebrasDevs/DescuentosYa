const { getMembersByIdController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const member = await getMembersByIdController(req.params.id);
        return res.status(200).json(member);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};