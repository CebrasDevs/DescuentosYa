const { getUsersHelper } = require("../../helpers");

module.exports = async (id) => {
  const user = await getUsersHelper({ id: +id });
  if (user[0].role === "COMPANY") {
    return user[0].Item.map((item) => item.Voucher);
  } else if (user[0].role === "MEMBER") {
    return user[0].Voucher;
  }
};
