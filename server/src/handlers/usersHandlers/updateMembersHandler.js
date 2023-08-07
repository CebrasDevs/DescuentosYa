const { updateMemberController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    let {
      email,
      password,
      dni,
      imageUrl,
      name,
      address,
      phoneNumber,
      lastPayment,
    } = req.body;
    let dataMember = {
      id: req.params.id,
      email,
      password,
      enabled,
      dni,
      imageUrl,
      name,
      address,
      phoneNumber,
      lastPayment,
    };
    const updatedMember = await updateMemberController(dataMember);
    return res.status(200).json(updatedMember);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
