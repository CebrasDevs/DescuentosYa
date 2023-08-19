const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

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
    // comparacion de contraseña con hash
    const passwordMatch = await bcrypt.compare(password,user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const cookieData = { token, user: { id: user.id, role: user.role } };

    res.cookie("accessTrue", cookieData, {
      // maxAge: 3600000, // Tiempo de vida de la cookie en milisegundos (1 hora)
      httpOnly: true,
    });

    const data = {
      message: "Login successful!",
      id: user.id,
      role: user.role,
      token: token
    }

    res.status(200).json({data}); // Envía un mensaje de éxito
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error authenticating the user" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    res.clearCookie("accessTrue"); // Elimina la cookie del token

    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error during logout" });
  }
});

module.exports = router;
