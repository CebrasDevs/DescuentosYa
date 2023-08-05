const { createMemberController } = require("../../controllers");

module.exports = async (req, res) => {
  try {
    let { email, password, dni, imageUrl, name, address, phoneNumber } =
      req.body;
    let dataMember = {
      email,
      password,
      dni,
      imageUrl,
      name,
      address,
      phoneNumber,
    };
    const newMember = await createMemberController(dataMember);
    return res.status(200).json(newMember);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
