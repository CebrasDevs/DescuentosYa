const express = require("express");
const { Router } = require("express");
const mainRouter = Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Middleware para verificar el token en rutas protegidas
async function verificarToken(req, res, next) {
  try {
    if (req.authorization.token || !req.cookies.accessTrue || !req.cookies.accessTrue.token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const token = req.authorization.token.split(' ')[1] || req.cookies.accessTrue.token;

    const id = req.cookies.accessTrue.user.id;

    const user = await prisma.user.findUnique({
      where: { id }, // Buscar al usuario por su ID
    });

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err || user.id !== decodedToken.userId) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }
      req.userId = decodedToken.userId;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

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
mainRouter.use("/payment", paymentRouter);
mainRouter.use("/", authRouter);
mainRouter.use("/profile", profileRouter);

module.exports = mainRouter;
