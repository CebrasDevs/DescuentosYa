const { updateItemsController } = require("../../controllers")


module.exports = async (req, res) => {
    try {
        let {imageUrl, name, description, categoryId, price, discount } = req.body;
        let dataItem = {id: req.params.id, imageUrl, name, description, categoryId, price, discount}
        const updatedItem = await updateItemsController(dataItem);
        return res.status(200).json(updatedItem);
        
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}