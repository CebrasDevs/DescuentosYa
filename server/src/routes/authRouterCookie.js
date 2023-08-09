const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

// Creamos una instancia de Prisma para interactuar con la base de datos
const prisma = new PrismaClient();

// Ruta para autenticación y creación de cookie
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar el usuario en la base de datos a partir del email
    const user = await prisma.user.findUnique({
      where: { email },
    });
    await prisma.$disconnect();

    // Si el usuario no existe, devolver un mensaje de error
    if (!user) {
      return res.status(404).json({ error: "User doesn't exist" });
    }

    // Verificar que la contraseña sea correcta
    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Si el usuario y la contraseña son correctos, crear la cookie
    res.cookie("token", JSON.stringify(user), {
      maxAge: 900000, // Tiempo de vida de la cookie en milisegundos (ejemplo: 900000ms = 15 minutos)
      httpOnly: true, // La cookie solo es accesible mediante HTTP (no JavaScript)
    });

    // Respuesta para indicar que el inicio de sesión fue exitoso.
    res.status(200).json({ mensaje: "Login successful!" });
  } catch (error) {
    res.status(500).json({ error: "Error authenticating the user" });
  }
});

router.post("/logout", (req, res) => {
  try {
    // Capturamos el valor del email desde el cuerpo de la solicitud
    const { email } = req.body;

    // Eliminamos la cookie existente al establecer su tiempo de vida en 0
    res.cookie("token", "", {
      maxAge: 0,
      httpOnly: true,
    });

    // Respuesta para indicar que el logout fue exitoso.
    res.status(200).json({ mensaje: "Logout successful!" });
  } catch (error) {
    res.status(500).json({ error: "Error during logout" });
  }
});

module.exports = router;
