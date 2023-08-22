const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { serialize } = require("cookie");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const {verifyToken} = require("../utils/authMiddleware");

const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ error: "User doesn't exist" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    //uso de JWT
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, //30 dias
      userId: user.id,
      role: user.role
    }, process.env.JWT_SECRET)
    //seteo COOKIES por HEADER
    const serialized = serialize('accessTrue', token, {
      httpOnly: process.env.DEPLOY === 'production', //true para que no se visualice la cookie en https
      secure: process.env.DEPLOY === 'production', //seguridad https, se habilita si la V.E es igual a 'production'
      sameSite: 'strict', //cambiar a none, para seguridad https
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/'
    })
    res.setHeader('Set-Cookie', serialized)

    res.status(200).json({ message: "Login Successfull" }); // Envía un mensaje de éxito
  } catch (error) {
    res.status(500).json({ error: "Error authenticating the user" });
  }
});

router.post("/logout", verifyToken, async (req, res) => {
  const {accessTrue} = req.cookies;
  try {
    jwt.verify(accessTrue, process.env.JWT_SECRET);
    const serialized = serialize('accessTrue', null, {
      httpOnly: process.env.DEPLOY === 'production', //true para que no se visualice la cookie en https
      secure: process.env.DEPLOY === 'production', //seguridad https, se habilita si la V.E es igual a 'production'
      sameSite: 'strict', //cambiar a none, para seguridad https
      maxAge: 0, // 0 para que desaparezca la cookie
      path: '/'
    })
    res.setHeader('Set-Cookie', serialized)

    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    res.status(500).json({ error: "Error during logout" });
  }
});

module.exports = router;
