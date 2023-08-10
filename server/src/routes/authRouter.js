const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    const { password, ...user2 } = user;
    if (!user) {
      return res.status(404).json({ error: "User doesn't exist" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const cookieData = { token, user: { id: user.id, role: user.role } };

    res.cookie(`${user.id}`, cookieData, {
      maxAge: 3600000, // Tiempo de vida de la cookie en milisegundos (1 hora)
      httpOnly: true,
    });

    res.status(200).json({
      user2,
      message: "Login successful!",
    }); // Envía un mensaje de éxito
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error authenticating the user" });
  }
});

router.post("/logout", (req, res) => {
  try {
    const { id } = req.body;

    res.clearCookie(`${id}`); // Elimina la cookie del token

    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error during logout" });
  }
});

module.exports = router;
