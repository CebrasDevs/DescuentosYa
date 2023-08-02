const { createItemsController } = require("../../controllers")


module.exports = async (req, res) => {
    try {
        const response = await createItemsController(req.body);
        return res.status(200).json(response);
        
    } catch (error) {
        res.send('Error')
    }
}