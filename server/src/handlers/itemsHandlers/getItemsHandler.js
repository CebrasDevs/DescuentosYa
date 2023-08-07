const { getItemsController } = require("../../controllers")


module.exports = async (req, res) => {
    try {
        const {name} = req.query;
        
        const response = await getItemsController(name)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}