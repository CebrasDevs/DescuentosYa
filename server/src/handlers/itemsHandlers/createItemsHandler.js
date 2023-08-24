const { createItemsController } = require("../../controllers")


module.exports = async (req, res) => {
    try {
        let {  
            categoryId, 
            description, 
            name, 
            price,
            imageUrl,
            discount,
            userId
        } = req.body;

        let dataItem = {
            userId, 
            categoryId, 
            description, 
            name, 
            price,
            imageUrl,
            discount
        }

        const response = await createItemsController(dataItem);

        return res.status(200).json(response);
        
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
