const jwt = require("jsonwebtoken");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Middleware para verificar el token en rutas protegidas
async function verifyToken(req, res, next) {
  try {
    if (!req.cookies.accessTrue || !req.cookies.accessTrue.token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const token = req.cookies.accessTrue.token;

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
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
