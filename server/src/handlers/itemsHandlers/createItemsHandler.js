const { createItemsController } = require("../../controllers")
// falta las validaciones de categories
// falta validaciones de vouchers
// el get Users devuelve toda la info sin estructurar

module.exports = async (req, res) => {
    try {
        let { 
            userId, 
            categoryId, 
            description, 
            name, 
            price,
            imageUrl,
            discount
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