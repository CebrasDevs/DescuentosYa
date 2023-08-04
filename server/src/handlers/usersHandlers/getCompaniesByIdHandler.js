const { getCompaniesByIdController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const company = await getCompaniesByIdController(req.params.id);
        return res.status(200).json(company);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};