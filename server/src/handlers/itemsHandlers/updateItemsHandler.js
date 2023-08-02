const { updateItemsController } = require("../../controllers")


module.exports = async (req, res) => {
    try {
        const response = await updateItemsController(req.params.id, req.body);
        return res.status(200).json(response);
        
    } catch (error) {
        res.send('Error')
    }
}