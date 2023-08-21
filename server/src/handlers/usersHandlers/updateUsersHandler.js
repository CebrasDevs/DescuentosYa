const { updateUsersController } = require("../../controllers");

module.exports = async (req, res) => {
    try {
        const user = await updateUsersController(req.params.id, req.body);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    };
};