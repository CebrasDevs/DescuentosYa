const { Router } = require("express");
const mainRouter = Router();

const shoppingRouter = require("./shoppingRouter");
const itemsRouter = require("./itemsRouter");
const usersRouter = require("./usersRouter");
const adminsRouter = require("./adminsRouter");
const companiesRouter = require("./companiesRouter");
const membersRouter = require("./membersRouter");
const vouchersRouter = require("./vouchersRouter");
const categoriesRouter = require("./categoriesRouter");

mainRouter.use("/shopping", shoppingRouter);
mainRouter.use("/items", itemsRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/admins", adminsRouter);
mainRouter.use("/companies", companiesRouter);
mainRouter.use("/members", membersRouter);
mainRouter.use("/vouchers", vouchersRouter);
mainRouter.use("/categories", categoriesRouter);

module.exports = mainRouter;
