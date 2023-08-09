const { getCompaniesByIdController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        let { id } = req.params
        const company = await getCompaniesByIdController(id);
        return res.status(200).json(company);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};