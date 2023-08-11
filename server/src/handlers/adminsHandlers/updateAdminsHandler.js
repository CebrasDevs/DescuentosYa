const { updateAdminsController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    let { email, password, dni, imageUrl, name, address, phoneNumber } =
      req.body;
    let dataAdmin = {
      id: req.params.id,
      email,
      password,
      enabled,
      dni,
      imageUrl,
      name,
      address,
      phoneNumber
    };
    const updatedAdmin = await updateAdminsController(dataAdmin);
    return res.status(200).json(updatedAdmin);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
