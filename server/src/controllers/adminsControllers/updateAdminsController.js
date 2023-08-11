const { updateUsersHelper } = require("../../helpers");

module.exports = async (dataAdmin) => {
  if (
    isNaN(dataAdmin.id) ||
    (dataAdmin.email && dataAdmin.email !== "string") ||
    (dataAdmin.password && typeof dataAdmin.password !== "string") ||
    dataAdmin.enabled ||
    (dataAdmin.dni && isNaN(dataAdmin.dni)) ||
    (dataAdmin.name && typeof dataAdmin.name !== "string") ||
    (dataAdmin.address && typeof dataAdmin.address !== "string")
  )
    throw new Error("Incomplete data or incorrect");
  let { id } = dataAdmin;
  const updatedAdmin = await updateUsersHelper(id, dataAdmin);
  let {
    email,
    enabled,
    role,
    dni,
    name,
    imageUrl,
    address,
    phoneNumber,
  } = updatedAdmin;
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
