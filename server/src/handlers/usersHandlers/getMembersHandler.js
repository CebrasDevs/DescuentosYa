// Cuando se agregue todo en el index del handler vamos a descomentarlo

const { getMembersController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const members = await getMembersController();
        return res.status(200).json(members);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};