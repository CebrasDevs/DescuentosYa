const { Router } = require('express');
const mainRouter = Router();

const shoppingRouter = require('./shoppingRouter')
const itemsRouter = require('./itemsRouter')
const usersRouter = require("./usersRouter");
const companiesRouter = require("./companiesRouter");
const membersRouter = require("./membersRouter");
const vouchersRouter = require("./vouchersRouter");

mainRouter.use('/shopping', shoppingRouter);
mainRouter.use('/items', itemsRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/companies", companiesRouter);
mainRouter.use("/members", membersRouter);

mainRouter.use("/vouchers", vouchersRouter);

module.exports = mainRouter;