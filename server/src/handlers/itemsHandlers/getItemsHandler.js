const { getItemsController } = require("../../controllers")


module.exports = async (req, res) => {
    try {
        const response = await getItemsController()
        return res.status(200).json(response)

    } catch (error) {
        res.send('Error')
    }
}