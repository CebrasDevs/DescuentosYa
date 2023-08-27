const { createUsersHelper } = require("../../helpers");
const { registerMembers } = require("../../utils/emailUtils");
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexName = /^[a-zA-ZÀ-ÿ\s'-]*$/;

module.exports = async (dataMember) => {
  if (
    !regexEmail.test(dataMember.email) ||
    // !isNaN(dataMember.password) ||
    !dataMember.password ||
    isNaN(+dataMember.dni_cuit) ||
    !dataMember.dni_cuit ||
    !regexName.test(dataMember.name) ||
    !isNaN(dataMember.address) || !dataMember.address ||
    !isNaN(dataMember.imageUrl) || !dataMember.imageUrl
  )
    throw new Error("Incomplete data or incorrect");
  dataMember.role = "MEMBER";
  const newMember = await createUsersHelper(dataMember);
  // agregamos el envio de email de bienvenida
  await registerMembers(newMember.email, newMember.name);
  let {
    id,
    email,
    enabled,
    role,
    dni_cuit,
    name,
    imageUrl,
    address,
    phoneNumber,
    lastPayment
  } = newMember;
  return {
    id,
    email,
    enabled,
    role,
    dni: dni_cuit,
    name,
    imageUrl,
    address,
    phoneNumber,
    lastPayment
  };
};
