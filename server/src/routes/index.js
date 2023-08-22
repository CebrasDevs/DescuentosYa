const { Router } = require("express");
const mainRouter = Router();
const {verifyToken} = require("../utils/authMiddleware");

const shoppingRouter = require("./shoppingRouter");
const itemsRouter = require("./itemsRouter");
const usersRouter = require("./usersRouter");
const adminsRouter = require("./adminsRouter");
const companiesRouter = require("./companiesRouter");
const membersRouter = require("./membersRouter");
const vouchersRouter = require("./vouchersRouter");
const categoriesRouter = require("./categoriesRouter");
const paymentRouter = require("./paymentRouter");
const authRouter = require("./authRouter");
const profileRouter = require("./profileRouter");
const reviewRouter = require("./reviewRouter");

// Usamos el middleware para verificar el token en rutas protegidas
mainRouter.use("/shopping", verifyToken, shoppingRouter);
mainRouter.use("/items", itemsRouter);
mainRouter.use("/users", verifyToken, usersRouter);
mainRouter.use("/admins", verifyToken, adminsRouter);
mainRouter.use("/companies", companiesRouter);
mainRouter.use("/members", membersRouter);
mainRouter.use("/vouchers", verifyToken, vouchersRouter);
mainRouter.use("/categories", categoriesRouter);
mainRouter.use("/payment", verifyToken, paymentRouter);
mainRouter.use("/", authRouter);
mainRouter.use("/profile", verifyToken, profileRouter);
mainRouter.use("/review", verifyToken, reviewRouter);


module.exports = mainRouter;
