const { updateUsersHelper } = require("../../helpers");
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexName = /^[a-zA-ZÀ-ÿ\s'-]*$/;

module.exports = async (dataMember) => {
  if (
    isNaN(dataMember.id) ||
    (dataMember.email && !regexEmail.test(dataMember.email)) ||
    (dataMember.password && !isNaN(dataMember.password)) ||
    dataMember.enabled ||
    (dataMember.dni_cuit && isNaN(dataMember.dni_cuit)) ||
    (dataMember.name && !regexName.test(dataMember.name)) ||
    (dataMember.address && !isNaN(dataMember.address)) ||
    (dataMember.lastPayment && isNaN(dataMember.lastPayment)) ||
    (dataMember.imageUrl && !isNaN(dataMember.imageUrl))
  )
    throw new Error("Incomplete data or incorrect");
  let { id } = dataMember;
  const updatedMember = await updateUsersHelper(id, dataMember);
  let {
    email,
    enabled,
    role,
    dni_cuit,
    name,
    imageUrl,
    address,
    phoneNumber,
    lastPayment
  } = updatedMember;
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
