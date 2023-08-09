const { updateMembersController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let {
      email,
      password,
      dni,
      imageUrl,
      enabled,
      name,
      address,
      phoneNumber,
      lastPayment,
    } = req.body;
    let dataMember = {
      id,
      email,
      password,
      enabled,
      dni_cuit: dni,
      imageUrl,
      name,
      address,
      phoneNumber,
      lastPayment,
    };
    const updatedMember = await updateMembersController(dataMember);
    return res.status(200).json(updatedMember);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
