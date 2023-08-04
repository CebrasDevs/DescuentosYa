const { updateUserHelper } = require("../../helpers");

module.exports = async (dataMember) => {
  if (
    isNaN(dataMember.id) ||
    (dataMember.email && dataMember.email !== "string") ||
    (dataMember.password && typeof dataMember.password !== "string") ||
    dataMember.enabled ||
    (dataMember.dni && isNaN(dataMember.dni)) ||
    (dataMember.name && typeof dataMember.name !== "string") ||
    (dataMember.address && typeof dataMember.address !== "string") ||
    (dataMember.lastPayment && typeof dataMember.lastPayment !== "string")
  )
    throw new Error("Incomplete data or incorrect");
  const updatedMember = await updateUserHelper(dataMember);
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
    last_payment: lastPayment,
  } = updatedMember;
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
    lastPayment,
  };
};
