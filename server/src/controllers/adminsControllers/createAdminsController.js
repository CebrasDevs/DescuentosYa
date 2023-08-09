const { createUsersHelper } = require("../../helpers");
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexName = /^[a-zA-ZÀ-ÿ\s'-]*$/;
module.exports = async (dataAdmin) => {
  if (
    !regexEmail.test(dataAdmin.email) ||
    (dataAdmin.password && !isNaN(dataAdmin.password)) ||
    (dataAdmin.dni_cuit && isNaN(dataAdmin.dni_cuit)) ||
    (dataAdmin.name && !regexName.test(dataAdmin.name))
  )
    throw new Error("Incomplete data or incorrect");
  dataAdmin.role = "ADMIN";
  const newAdmin = await createUsersHelper(dataAdmin);
  let {
    id,
    email,
    enabled,
    role,
    dni,
    name,
    imageUrl,
    address,
    phoneNumber
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
    phoneNumber
  };
};
