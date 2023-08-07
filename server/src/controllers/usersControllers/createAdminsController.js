const { createUserHelper } = require("../../helpers");

module.exports = async (dataAdmin) => {
  if (
    typeof dataAdmin.email !== "string" ||
    typeof dataAdmin.password !== "string" ||
    !dataAdmin.dni ||
    isNaN(dataAdmin.dni) ||
    typeof dataAdmin.name !== "string" ||
    typeof dataAdmin.address !== "string"
  )
    throw new Error("Incomplete data or incorrect");
  dataAdmin.role = "ADMIN";
  const newAdmin = await createUserHelper(dataAdmin);
  let {
    id,
    email,
    enabled,
    role,
    dni,
    name,
    url_image: imageUrl,
    address,
    phone: phoneNumber,
  } = newAdmin;
  return {
    id,
    email,
    enabled,
    role,
    dni,
    name,
    imageUrl,
    address,
    phoneNumber,
  };
};
