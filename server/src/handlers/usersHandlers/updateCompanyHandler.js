// Cuando se agregue todo en el index del handler vamos a descomentarlo

const { updateCompanyController } = require("../../controllers");

module.exports = async (req, res) => {
    try {
        const company = await updateCompanyController(req.params.id, req.body);
        return res.status(200).json(company);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};