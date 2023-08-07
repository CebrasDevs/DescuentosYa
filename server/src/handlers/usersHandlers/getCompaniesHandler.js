const { getCompaniesController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        console.log("conexion deploy funciona");
        const companies = await getCompaniesController();
        return res.status(200).json(companies);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};
