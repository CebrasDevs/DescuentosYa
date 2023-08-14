const { createShoppingController } = require('../../controllers');

module.exports = async (req, res) => {
    try {
        const response = await createShoppingController(req.body);
        // en caso de retornar el pdf al usuario, descomentar
        // res.setHeader('Content-Type', 'application/pdf');
        // res.setHeader('Content-Disposition', 'inline; filename=tiket.pdf');
        return res.status(200).send(response);

    } catch (error) {
        
        return res.status(400).json({ error: error.message })
    };
};

