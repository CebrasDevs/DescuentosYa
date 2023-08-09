const { 
    getCompaniesByIdController, 
    getMembersByIdController, 
    getAdminsByIdController 
} = require("../../controllers");

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.query;
        let user = {};
        if (role === 'member') {
            user = await getMembersByIdController(id);
        } else if (role === 'company') {
            user = await getCompaniesByIdController(id);
        } else if (role === 'admin') {
            user = await getAdminsByIdController(id);
        } else throw Error("Invalid user role");

        return res.status(200).json({user});
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}