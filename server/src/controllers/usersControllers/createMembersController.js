const { createUserHelper } = require("../../helpers");

module.exports = async (dataMember) => {
  if (
    typeof dataMember.email !== "string" ||
    typeof dataMember.password !== "string" ||
    !dataMember.dni ||
    isNaN(dataMember.dni) ||
    typeof dataMember.name !== "string" ||
    typeof dataMember.address !== "string"
  )
    throw new Error("Incomplete data or incorrect");
  dataMember.role = "MEMBER";
  const newMember = await createUserHelper(dataMember);
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
  } = newMember;
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
