const { getUsersController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const {name} = req.query
        const users = await getUsersController(name);
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};