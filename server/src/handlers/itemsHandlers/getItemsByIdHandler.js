const { getItemsByIdController } = require("../../controllers")


module.exports = async (req, res) => {
    try {
        const response = await getItemsByIdController(req.params.id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}