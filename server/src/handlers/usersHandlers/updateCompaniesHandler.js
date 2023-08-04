const { updateCompaniesController } = require("../../controllers");

module.exports = async (req, res) => {
    try {
        let { email, password, cuit, imageUrl, companyName, address, phoneNumber, description } = req.body;
        let dataCompany = { id: req.params.id, email, password, enabled, cuit, imageUrl, companyName, address, phoneNumber, description };
        const updatedCompany = await updateCompaniesController(dataCompany);
        return res.status(200).json(updatedCompany);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};