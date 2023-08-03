// Cuando se agregue todo en el index del handler vamos a descomentarlo

const { getUsersController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const users = await getUsersController();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};