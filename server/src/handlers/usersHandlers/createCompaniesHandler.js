const { createCompaniesController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        let { email, password, cuit, imageUrl, companyName, address, phoneNumber, description } = req.body;
        let dataCompany = { email, password, cuit, imageUrl, companyName, address, phoneNumber, description };
        const newCompany = await createCompaniesController(dataCompany);
        return res.status(200).json(newCompany);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};