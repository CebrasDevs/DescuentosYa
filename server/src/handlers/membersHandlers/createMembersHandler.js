const { createMembersController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    let {
      email,
      password,
      dni,
      imageUrl,
      name,
      address,
      phoneNumber
    } = req.body;
    let dataMember = {
      email,
      password,
      dni_cuit: dni,
      imageUrl,
      name,
      address,
      phoneNumber
    };
    const newMember = await createMembersController(dataMember);
    return res.status(200).json(newMember);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
