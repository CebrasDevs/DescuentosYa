const { updateItemsController } = require("../../controllers")


module.exports = async (req, res) => {
    try {
        let {imageUrl, name, description, categoryId, price, discount, enabled } = req.body;
        let dataItem = {id: req.params.id, imageUrl, name, description, categoryId, price, discount, enabled}
        const updatedItem = await updateItemsController(dataItem);
        return res.status(200).json(updatedItem);
        
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}