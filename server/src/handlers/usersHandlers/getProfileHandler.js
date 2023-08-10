const { 
    getProfileController
} = require("../../controllers");

module.exports = async (req, res) => {
    try {
        let { id } = req.params;

        if (!id) {
            // Si no me llego un id por params, asumo que se trata del usuario activo
            // Asi que tomo el id de la cookie
            id = req.id;
        }
        const user = await getProfileController(id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

