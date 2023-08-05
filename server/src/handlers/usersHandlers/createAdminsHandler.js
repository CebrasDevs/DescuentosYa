const { createAdminsController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    let { email, password, dni, imageUrl, name, address, phoneNumber } =
      req.body;
    let dataAdmin = {
      email,
      password,
      dni,
      imageUrl,
      name,
      address,
      phoneNumber,
    };
    const newAdmin = await createAdminsController(dataAdmin);
    return res.status(200).json(newAdmin);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
