const { verify } = require("jsonwebtoken");
require("dotenv").config();

// Middleware para verificar el token en rutas protegidas
async function verifyToken(req, res, next) {
  try {
    console.log(req.cookies.accessTrue)
    if (!req.cookies.accessTrue && !req.headers.authorization) {
      return res.status(406).json({ message: "Token not provided" });
    }
    const { accessTrue } = req.cookies || req.headers.authorization.split(" ")[1];
    const { userId } = verify(accessTrue, process.env.JWT_SECRET)
    console.log(userId)
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = { verifyToken };
