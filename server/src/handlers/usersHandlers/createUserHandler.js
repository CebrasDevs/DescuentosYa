// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const { createUserController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const user = await createUserController(req.body);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};