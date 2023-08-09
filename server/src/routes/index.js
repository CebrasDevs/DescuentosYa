const { Router } = require("express");
const mainRouter = Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Middleware para verificar el token en rutas protegidas
function verificarToken(req, res, next) {
  const { id } = req.query;
  const token = req.cookies[id];
  // console.log(token);
  // console.log(req)

  if (!token) {
    return res.status(401).json({ mensaje: "Token not provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ mensaje: "Invalid or expired token" });
    }
    req.usuarioId = decodedToken.userId;
    next();
  });
}

const shoppingRouter = require("./shoppingRouter");
const itemsRouter = require("./itemsRouter");
const usersRouter = require("./usersRouter");
const adminsRouter = require("./adminsRouter");
const companiesRouter = require("./companiesRouter");
const membersRouter = require("./membersRouter");
const vouchersRouter = require("./vouchersRouter");
const categoriesRouter = require("./categoriesRouter");
const authRouter = require("./authRouter");
// const authRouterCookie = require("./authRouterCookie");
const profileRouter = require("./profileRouter");

// Usamos el middleware para verificar el token en rutas protegidas
mainRouter.use("/shopping", verificarToken, shoppingRouter);
mainRouter.use("/items", itemsRouter);
mainRouter.use("/users", verificarToken, usersRouter);
mainRouter.use("/admins", verificarToken, adminsRouter);
mainRouter.use("/companies", companiesRouter);
mainRouter.use("/members", membersRouter);
mainRouter.use("/vouchers", verificarToken, vouchersRouter);
mainRouter.use("/categories", categoriesRouter);
mainRouter.use("/", authRouter);
mainRouter.use("/profile", profileRouter);

module.exports = mainRouter;
