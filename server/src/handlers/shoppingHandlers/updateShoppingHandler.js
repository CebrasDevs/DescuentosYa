const { updateShoppingController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const response = await updateShoppingController(req.params.id, req.body);
        return res.status(200).json(response);

    } catch (error) {

        return res.status(400).json({ error: error.message })
    };
};

