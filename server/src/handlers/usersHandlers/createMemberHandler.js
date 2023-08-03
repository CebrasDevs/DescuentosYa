// Cuando se agregue todo en el index del handler vamos a descomentarlo

const { createMemberController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const member = await createMemberController(req.body);
        return res.status(200).json(member);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};